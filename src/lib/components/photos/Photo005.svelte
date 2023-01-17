
			<script lang="ts">
				import { onMount } from 'svelte';
				import { src as placeholder, width, height } from '../../../../photos/005.jpg?width=200&blur&metadata'
				
				export let alt:string;
			
				const importFormats = async () => {
					let srcsetAvif = (await import('../../../../photos/005.jpg?w=300;500;700;900;1100;1700;2500;3300&format=avif&srcset')).default;
					let srcsetWebp = (await import('../../../../photos/005.jpg?w=300;500;700;900;1100;1700;2500;3300&format=webp&srcset')).default;

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
		