<script>
  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  $: trans = i18n.translations[$currentLang] 
  
</script>

<svelte:head>
  <title>{trans.nav.location ? trans.nav.location : 'Location'}</title>
</svelte:head>


<h1>Content</h1>