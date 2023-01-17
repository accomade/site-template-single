<script lang="ts">
  import { currentLang } from '$lib/stores/lang';
  
  const importTOS = async (lang: string) => {
    return import(`$lib/content/de/tos.svelte`)
  }
</script>

{#await importTOS($currentLang) then mod}
  <svelte:component this={mod.default}></svelte:component>
{/await}
