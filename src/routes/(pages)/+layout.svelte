<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header/>

<slot></slot>

<Footer/>

<style>
  :global( html, body) {
    margin: 0;
    padding: 0;
  }

  :global( body ) {
    display: flex;
    flex-direction: column;
  }

</style>