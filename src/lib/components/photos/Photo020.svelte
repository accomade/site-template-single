
			<script lang="ts">
				import { onMount } from 'svelte';
				import { src as placeholder, width, height } from '../../../../photos/020.jpg?w=40&metadata'
				
				export let alt:string;
				export let maxWidth:string="100%";
				export let maxHeight:string="100%";
				export let clientHeight:number;
				export let clientWidth:number;
				export let eager:boolean = false;

				let sharpen = false;
				const importFormats = async () => {
					let srcsetAvif = (await import('../../../../photos/020.jpg?w=300;500;700;900;1100;2000;2600;3200;4000&format=avif&srcset')).default;
					let srcsetWebp = (await import('../../../../photos/020.jpg?w=300;500;700;900;1100;2000;2600;3200;4000&format=webp&srcset')).default;

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
		