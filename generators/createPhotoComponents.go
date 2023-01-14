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
	for i := 0; i < 100; i++ {
		photoNumber := fmt.Sprintf("%03d", i+1)
		compID := photoNumber
		log.Println("Creating Component:", compID)

		if _, err := os.Stat(fmt.Sprintf("../photos/%s.jpg", photoNumber)); errors.Is(err, os.ErrNotExist) {
			photoNumber = "000"
		}

		t, err := template.New("photo-comp").Parse(`
			<script lang="ts">
				import { onMount } from 'svelte';
				
				import srcsetAvif from '../../../../photos/{{.Number}}.jpg?w=300;500;700;900;1100;1700;2500;3300;4100&format=avif&srcset'
				import srcsetWebp from '../../../../photos/{{.Number}}.jpg?w=300;500;700;900;1100;1700;2500;3300;4100&format=webp&srcset'
				import { src as placeholder, width, height } from '../../../../photos/{{.Number}}.jpg?width=200&blur&metadata'
			
				export let alt:string;
			
				let mounted = false;
				onMount( async () => {
					mounted = true;
				})
			
			</script>
			
			<picture>
				{#if mounted}
				<source srcset={srcsetAvif} type="image/avif"/>
				<source srcset={srcsetWebp} type="image/webp"/>
				{/if}
				<img
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
