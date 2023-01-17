<script lang="ts"> 
  
  import { onMount } from 'svelte';
  import { load } from '$lib/maps';

  export let lat: number;
  export let long: number;
  export let zoom: number;

  let mapDiv:HTMLDivElement;
  const mapsCallback = () => {
    //console.log('maps ready')
    const place = { lat: lat, lng: long };
    // The map, centered at place
    
    const map = new window.google.maps.Map(
      mapDiv,
      {
        zoom: zoom,
        center: place,
      }
    );

    // The marker, positioned at place
    
    const marker = new window.google.maps.Marker({
      position: place,
      map: map,
    });    
  }

  onMount( () => {
    load(mapsCallback, window)
  });

</script>


<div bind:this={mapDiv} id="map"></div>

<style>
  div {
    width: 100%;
    min-height: 10rem;
  }
</style>