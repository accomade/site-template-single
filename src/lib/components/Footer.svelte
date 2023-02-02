<script lang="ts">
  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  
	import type { Nav } from '$lib/types/nav';
  
  export let navItems:Nav
	$: currentTranslation = i18n.translations[$currentLang]

  const importFooter = async (lang: string) => {
    return import(`$lib/content/${lang}/footer.svelte`)
  }

</script>

<footer>
  <div class="nav">
    {#each Object.entries(navItems.footer) as [navKey, route] }
      <div class="link-wrapper">
        <a href={route}>{ currentTranslation.nav[navKey] }</a>
      </div>
    {/each}
  </div>
  <div class="content">
    {#await importFooter( $currentLang ) then mod}
    <svelte:component this={mod.default} />
    {/await}
  </div>
</footer>

<style>
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-grow: 3;
  }
  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: right;
  }

  a {
		text-decoration: underline;
		color: var(--nav-font-color);
    font-family: var(--nav-font-family, 'mono');
    font-variant: var(--nav-font-variant, 'normal');
    font-size: 1.4rem;
    font-weight: bold;
	}

  .link-wrapper {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    color: var(--footer-font-color);
    background-color: var(--footer-bg-color);
    margin-top: 1rem;
    width: calc(100vw - 4rem);

    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media(max-width: 500px) {
    .nav {
      flex-direction: row;
      justify-content: left;
    }
  }

</style>