package main

import (
	"errors"
	"fmt"
	"html/template"
	"log"
	"os"
)

type PhotoComponent struct {
	Number string
}

func main() {

	/** creates at max 150 components ... for existing files */
	for i := 0; i < 150; i++ {
		photoNumber := fmt.Sprintf("%03d", i+1)
		compID := photoNumber

		if _, err := os.Stat(fmt.Sprintf("../../photos/%s.jpg", photoNumber)); errors.Is(err, os.ErrNotExist) {
			//photoNumber = "000"
			// skip unknown files ... let's see if this improves build times ...
			continue
		}
		log.Println("Creating Component:", compID)

		t, err := template.New("photo-comp").Parse(`
			<script lang="ts">
				import { onMount } from 'svelte';
				import { src as placeholder, width, height } from '../../../../photos/{{.Number}}.jpg?w=40&metadata'
				
				export let alt:string;
				export let maxWidth:string="100%";
				export let maxHeight:string="100%";
				export let clientHeight:number;
				export let clientWidth:number;
				export let eager:boolean = false;

				let sharpen = false;
				const importFormats = async () => {
					let srcsetAvif = (await import('../../../../photos/{{.Number}}.jpg?w=300;500;700;900;1100;2000;2600;3200;4000&format=avif&srcset')).default;
					let srcsetWebp = (await import('../../../../photos/{{.Number}}.jpg?w=300;500;700;900;1100;2000;2600;3200;4000&format=webp&srcset')).default;

					sharpen = true;
					return {
						avif: srcsetAvif,
						webp: srcsetWebp
					}
				}

				
				let mounted = false;
				onMount( () => {
					mounted = true;
				})
			
			</script>
			
			<picture
					bind:clientHeight={clientHeight}
					bind:clientWidth={clientWidth}
					style="max-width:{maxWidth};max-height:{maxHeight};"
				>
				{#if mounted}
					{#await importFormats() then formats}
						<source srcset={formats.avif} type="image/avif"/>
						<source srcset={formats.webp} type="image/webp"/>
					{/await}
				{/if}
				<img
					class:sharpen={sharpen}
					style="max-width:{maxWidth};max-height:{maxHeight};"
					loading="{eager ? null : 'lazy'}"
					decoding="{eager ? null : 'async'}"
					fetchPriority="{eager ? 'high' : null}"
					src={placeholder}
					{alt}
					{width}
					{height}
					/>
			</picture>
			
			<style>
				picture {
					display: block;
					width: 100%;
					height: 100%;
				}

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					filter: blur(20px);
					box-shadow: 0px 1.1px 2.2px rgba(0, 0, 0, 0.02),
						0px 2.7px 5.3px rgba(0, 0, 0, 0.028),
						0px 5px 10px rgba(0, 0, 0, 0.035),
						0px 8.9px 17.9px rgba(0, 0, 0, 0.042),
						0px 16.7px 33.4px rgba(0, 0, 0, 0.05),
						0px 40px 80px rgba(0, 0, 0, 0.07);
				}

				img.sharpen {
					animation: sharpen .5s both;
				}
				@keyframes sharpen {
					from {
						filter: blur(20px);
					}
					to {
						filter: blur(0px);
					}
				}

			</style>
		`)
		if err != nil {
			log.Fatal(err)
		}

		file, err := os.Create(
			fmt.Sprintf("../../src/lib/components/photos/Photo%s.svelte", compID))
		if err != nil {
			log.Fatal(err)
		}
		defer file.Close()

		err = t.Execute(file, PhotoComponent{Number: photoNumber})
		if err != nil {
			log.Fatal(err)
		}

	}

}
