<script lang="ts">
	import { i18n } from '$lib/conf'
  import { currentLang } from '$lib/stores/lang';
  
	import type { Nav } from '$lib/types/nav';
	import { isMenuOpen } from '$lib/stores/menu';
	export let navItems:Nav
	
	let allTranslations = Object.keys(i18n.translations);
	$: currentTranslation = i18n.translations[$currentLang].nav
	
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="main-nav" class:open={$isMenuOpen}>
	<ul>
		{#each Object.entries(navItems.main) as [navKey, route]}
			{#if route}
				<li>
					<a href="{route}">{ currentTranslation[navKey] }</a>
				</li>
			{:else if navKey == "lang" }
				{#if allTranslations.length > 1}
				<li>
					<fieldset>
						<legend>{ currentTranslation[navKey] }</legend>
				
						{#each allTranslations as langKey}
						<div class="radio-wrapper">
							<input 
									type="radio"
									bind:group={$currentLang}
									name="language" 
									value="{langKey}"
									checked={langKey === $currentLang}>
							<label for="{langKey}">{currentTranslation[langKey] ? currentTranslation[langKey] : langKey}</label>
						</div>
						{/each}
					</fieldset>
				</li>
				{/if}
			{:else}
				<li>
					<span>{ currentTranslation[navKey] }</span>
				</li>
			{/if}
		{/each}
	</ul>
</nav>

<style>
	nav {
		position: fixed;
    padding-right: 1rem;
    top: 0;
    right: 0;
    padding-top: 3rem;
    background-color: var(--nav-bg-color);
    color: var(--nav-font-color);
    height: 100vh;
		font-family: var(--nav-font-family);
		font-variant: var(--nav-font-variant);
    font-size: 1.6rem;
    font-weight: bold;

		overflow-y: scroll;
		overflow-x: hidden;
	}

	li {
		list-style: none;
		margin-bottom: 1rem;
	}

	a {
		text-decoration: underline;
		color: var(--nav-font-color);
	}

	.radio-wrapper {
		font-family: var(--nav-font-family);
		font-variant: var(--nav-font-variant);
    font-size: 1.6rem;
		font-weight: bold;
		line-height: 1.1;
		display: grid;
		grid-template-columns: 1em auto;
		gap: 0.5em;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	ul {
		padding-left: 3rem;
		margin: 0;
	}
	
</style>