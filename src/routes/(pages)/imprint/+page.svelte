<script>
  import Photo000 from '$lib/components/Photo000.svelte'

  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  $: trans = i18n.translations[$currentLang] 
  
</script>


<svelte:head>
  <title>{trans.nav.imprint ? trans.nav.imprint : 'Imprint'}</title>
</svelte:head>


<h1>Imprint</h1>
<Photo000 alt="alt" maxHeight="20rem" maxWidth="20rem"/>