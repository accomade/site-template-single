<script lang="ts">
  import type { PhotoNumber } from '$lib/types/photos';
  
  export let alt:string;
  export let photo:PhotoNumber;
  
  const importPhoto = () => import(`../photos/Photo${photo}.svelte`);
</script>

{#await importPhoto() then module }
<svelte:component this={module.default} {alt}></svelte:component>
{/await}