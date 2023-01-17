<script lang="ts">
  import { translations } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  $: dict = translations.translations[$currentLang].dict
  
  export let data: App.PageData & Record<string, any>;
</script>

{@debug data}

<h1>Wohnung: { dict[data.accoHandle] ? dict[data.accoHandle] : data.accoHandle}</h1>