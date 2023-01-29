<script lang="ts">
  import PhotoDispatcher from './Photo.svelte'
  import type { GridPhoto } from '$lib/types/photos'
  export let photos: GridPhoto[]

  /*
  TODO make photos bigger/smaller on click
  */
 
  let photoSizes = photos.map( (p) => p.cols)
  const rotateCols = ( i:number ) => {
    if(photoSizes[i] == 3) {
      photoSizes[i] = 1
    }
    else {
      photoSizes[i] = photoSizes[i] + 1
    }
  }
</script>

<div class="grid-container">
  {#each photos as p, i }
    <button 
        aria-label="resize" on:click={() => rotateCols(i)}
        class="photo-container" 
        class:span-1={photoSizes[i] == 1}
        class:span-2={photoSizes[i] == 2}
        class:span-3={photoSizes[i] == 3}>
    
      <PhotoDispatcher photo={p.photo} alt={p.alt}/>
  
    </button>
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

  .photo-container {
    padding: 0;
    border: 0;
    cursor: pointer;
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
