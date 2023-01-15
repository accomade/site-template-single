<script>

</script>

<div class="photo-container">
 <slot></slot>
</div>


<style>

  .span-2 {
    grid-column: span 2;
  }

  .span-3 {
    grid-column: span 3;
  }


  .photo-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    grid-auto-flow: dense;
  }

  @media( max-width: 500px ) {
    .span-2 {
      grid-column: span 1;
    }
    .span-3 {
      grid-column: span 1;
    }
    .photo-container {
      grid-template-columns: 1fr;
    }
  }

  @media ( max-width: 800px) and ( min-width: 500px ) {
    .span-2 {
      grid-column: span 1;
    }
    .span-3 {
      grid-column: span 2;
    }
    .photo-container {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
