<script lang="ts">
  import { translations } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  
  const importTOS = async (lang: string) => {
    return import(`$lib/content/${lang}/footer.svelte`)
  }
</script>


