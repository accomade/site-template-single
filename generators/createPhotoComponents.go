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

	/** creates 100 components ... and links existing files, otherwise placeholder*/
	for i := 0; i < 150; i++ {
		photoNumber := fmt.Sprintf("%03d", i+1)
		compID := photoNumber
		log.Println("Creating Component:", compID)

		if _, err := os.Stat(fmt.Sprintf("../photos/%s.jpg", photoNumber)); errors.Is(err, os.ErrNotExist) {
			photoNumber = "000"
		}

		t, err := template.New("photo-comp").Parse(`
			<script lang="ts">
				import { onMount } from 'svelte';
				import { src as placeholder, width, height } from '../../../../photos/{{.Number}}.jpg?w=200&blur&metadata'
				
				export let alt:string;
				export let maxWidth:string;
				export let maxHeight:string;
			
				const importFormats = async () => {
					let srcsetAvif = (await import('../../../../photos/{{.Number}}.jpg?w=300;500;700;900;1100;1700;2500;3300&format=avif&srcset')).default;
					let srcsetWebp = (await import('../../../../photos/{{.Number}}.jpg?w=300;500;700;900;1100;1700;2500;3300&format=webp&srcset')).default;

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
			
			<picture>
				{#if mounted}
					{#await importFormats() then formats}
						<source srcset={formats.avif} type="image/avif"/>
						<source srcset={formats.webp} type="image/webp"/>
					{/await}
				{/if}
				<img
					style="max-width:{maxWidth};max-height:{maxHeight};"
					loading="lazy"
					src={placeholder}
					{alt}
					{width}
					{height}
					/>
			</picture>
			
			<style>
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			</style>
		`)
		if err != nil {
			log.Fatal(err)
		}

		file, err := os.Create(
			fmt.Sprintf("../src/lib/components/photos/Photo%s.svelte", compID))
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
