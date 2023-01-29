
			<script lang="ts">
				import { onMount } from 'svelte';
				import { src as placeholder, width, height } from '../../../../photos/005.jpg?w=40&metadata'
				
				export let alt:string;
				export let maxWidth:string;
				export let maxHeight:string;
			
				let sharpen = false;
				const importFormats = async () => {
					let srcsetAvif = (await import('../../../../photos/005.jpg?w=300;500;700;900;1100;1700;2500;3300&format=avif&srcset')).default;
					let srcsetWebp = (await import('../../../../photos/005.jpg?w=300;500;700;900;1100;1700;2500;3300&format=webp&srcset')).default;

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
			
			<picture>
				{#if mounted}
					{#await importFormats() then formats}
						<source srcset={formats.avif} type="image/avif"/>
						<source srcset={formats.webp} type="image/webp"/>
					{/await}
				{/if}
				<img
					class:sharpen={sharpen}
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
					filter: blur(20px);
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
		