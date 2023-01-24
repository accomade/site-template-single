<script>
  //TODO make it work

  /*
  import '@beyonk/gdpr-cookie-consent-banner/dist/style.css' // optional, you can also define your own styles
  // @ts-ignore
  import GdprBanner from '@beyonk/gdpr-cookie-consent-banner' ///src/components/Banner.svelte'

  const initAnalytics = () => {
    // do something with segment.io or google analytics etc
  }
  <GdprBanner name="some" description="bar" on:analytics={initAnalytics} />
  */
</script>

<slot></slot>

<style>
  :global( body, html ) {
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    background-color: var(--main-bg-color);
    color: var(--main-font-color);
    font-family: var(--main-font-family);

  }

  *,
  *::before,
  *::after { 
    box-sizing: border-box;
  }

</style>