
			<script lang="ts">
				import { onMount } from 'svelte';
				
				import srcsetAvif from '../../../../photos/001.jpg?w=300;500;700;900;1100;1700;2500;3300;4100&format=avif&srcset'
				import srcsetWebp from '../../../../photos/001.jpg?w=300;500;700;900;1100;1700;2500;3300;4100&format=webp&srcset'
				import { src as placeholder, width, height } from '../../../../photos/001.jpg?width=200&blur&metadata'
			
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
		