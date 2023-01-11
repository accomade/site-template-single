package main

import (
	"fmt"
	"html/template"
	"log"
	"os"
)

type PhotoComponent struct {
	Number string
}

func main() {
	files, err := os.ReadDir("../photos")
	if err != nil {
		os.Exit(1)
	}

	log.Println("Cleaning old symlinks")
	err = os.RemoveAll("../src/lib/photos")
	if err != nil {
		log.Fatal(err)
	}
	err = os.Mkdir("../src/lib/photos", 0777)
	if err != nil {
		log.Fatal(err)
	}

	for _, f := range files {
		fileName := f.Name()
		log.Println("Found File", fileName)

		compID := fileName[0:3]
		log.Println("Creating Component:", compID)

		t, err := template.New("photo-comp").Parse(`
			<script lang="ts">
				import { onMount } from 'svelte';
				
				import srcsetAvif from '$lib/photos/{{.Number}}.jpg?w=300;500;700;900;1100;1700;2500;3300;4100&format=avif&srcset'
				import srcsetWebp from '$lib/photos/{{.Number}}.jpg?w=300;500;700;900;1100;1700;2500;3300;4100&format=webp&srcset'
				import { src as placeholder, width, height } from '$lib/photos/{{.Number}}.jpg?width=200&blur&metadata'
			
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
					width: 100vw;
					height: 100vh;
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

		t.Execute(file, PhotoComponent{Number: compID})

		log.Println("Creating symlink")
		err = os.Symlink(
			fmt.Sprintf("../../../photos/%s", fileName),
			fmt.Sprintf("../src/lib/photos/%s.jpg", compID),
		)
		if err != nil {
			log.Fatal(err)
		}
	}

}
