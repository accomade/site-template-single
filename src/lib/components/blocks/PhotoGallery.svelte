<script lang="ts">
  import PhotoDispatcher from './Photo.svelte'
  import type { GridPhoto } from '$lib/types/photos'
  export let photos: GridPhoto[]

  /*
  TODO make photos bigger/smaller on click
  */
 
</script>

<div class="grid-container">
  {#each photos as p }
  <div 
      class="photo-container" 
      class:span-1={p.cols == 1}
      class:span-2={p.cols == 2}
      class:span-3={p.cols == 3}>
    <PhotoDispatcher photoNumber={p.photo} alt={p.alt}/>
  </div>
  {/each}
</div>


<style>
  .span-1 {
    grid-column: span 1;
  }

  .span-2 {
    grid-column: span 2;
  }

  .span-3 {
    grid-column: span 3;
  }

  .grid-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    grid-auto-flow: dense;
  }

  @media( max-width: 500px ) {
    .span-1 {
      grid-column: span 1;
    } 
    .span-2 {
      grid-column: span 1;
    }
    .span-3 {
      grid-column: span 1;
    }
    .grid-container {
      grid-template-columns: 1fr;
    }
  }

  @media ( max-width: 800px) and ( min-width: 500px ) {
    .span-1 {
      grid-column: span 1;
    }
    .span-2 {
      grid-column: span 1;
    }
    .span-3 {
      grid-column: span 2;
    }
    .grid-container {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
