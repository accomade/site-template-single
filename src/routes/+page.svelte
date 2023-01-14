<script>
 
  import Photo001 from '$lib/components/photos/Photo001.svelte';
  import Photo002 from '$lib/components/photos/Photo002.svelte';
  import Photo007 from '$lib/components/photos/Photo007.svelte';
</script>




<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="photo-container">
  <div class="span-2">
    <Photo001 alt="Koserower Strand"/>
  </div>
  <Photo002 alt="Something"/>
  <Photo007 alt="placeholder"/>
</div>

<style>
  .span-2 {
    grid-column: span 2;
  }

  .photo-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-auto-flow: dense;
    gap: 1rem;
  }

</style>