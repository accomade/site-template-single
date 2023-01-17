<script lang="ts">
  import type { Block } from '$lib/types/blocks'
  import type { SvelteComponent } from 'svelte';

  import Text from '$lib/components/blocks/Text.svelte';
  import Photo from '$lib/components/blocks/Photo.svelte';
  import Calendar from '$lib/components/blocks/Calendar.svelte';
  import Map from '$lib/components/blocks/Map.svelte';
  import PhotoGallery from '$lib/components/blocks/PhotoGallery.svelte';
  import PricingTable from '$lib/components/blocks/PricingTable.svelte';
  import Weather from '$lib/components/blocks//Weather.svelte';

  export let spec:Block;
  
  let props:any
  let component: typeof SvelteComponent

  if(!!spec) {
    switch (spec.kind) {
      case 'text':
        component = Text
        props = spec.content
        break;
      case 'photo':
        component = Photo
        props = spec.content
        break;  
      case 'calendar':
        component = Calendar
        props = spec.content
        break; 
      case 'map':
        component = Map
        props = spec.content
        break;
      case 'photo-gallery':
        component = PhotoGallery
        props = spec.content
        break;
      case 'pricing-table':
        component = PricingTable
        props = spec.content
        break;
      case 'weather':
        component = Weather
        props = spec.content
        break;
    }
  }
</script>

{#if component}
<svelte:component this={component} {...props}/>
{/if}