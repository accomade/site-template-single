<script lang="ts">
  import type { PhotoNumber } from '$lib/types/photos';
  
  export let alt:string;
  export let photoNumber:PhotoNumber;
  
  const importPhoto = () => import(`./photos/Photo${photoNumber}.svelte`);
</script>

{#await importPhoto() then module }
<svelte:component this={module.default} {alt}></svelte:component>
{/await}