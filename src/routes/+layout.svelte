<script lang="ts">
  import { Banner } from 'gdpr-cooco-banner';
  
  import { i18n, cookieSettings } from '$lib/conf'
  import { currentLang } from '$lib/stores/lang';
  import { cookieSelection } from '$lib/stores/cookies';
  
  $: currentTranslation = i18n.translations[$currentLang]
  
  const analyticsCookies = ( e:CustomEvent ) => {
    const currentSelection = $cookieSelection
    currentSelection.analytics = e.detail.enabled
    cookieSelection.set(currentSelection)
  }
  const preferenceCookies = ( e:CustomEvent ) => {
    const currentSelection = $cookieSelection
    currentSelection.preferences = e.detail.enabled
    cookieSelection.set(currentSelection)
  }
  const marketingCookies = ( e:CustomEvent ) => {
    const currentSelection = $cookieSelection
    currentSelection.marketing = e.detail.enabled
    cookieSelection.set(currentSelection)
  }
</script>

<slot></slot>

<Banner 
  on:analytics={ analyticsCookies }
  on:preferences={ preferenceCookies }
  on:marketing={ marketingCookies }
  
  translation={currentTranslation.cookies} 
  choices={cookieSettings.types}/>

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

  :global( h3 ) {
    font-variant: small-caps;
    text-align: center;
    font-size: 1.8rem;
  } 

  :global( h2 ) {
    font-variant: small-caps;
    font-size: 2.2rem;
  } 

  :global( h1 ) {
    font-variant: small-caps;
    font-size: 3rem;
  } 

</style>