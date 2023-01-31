<script lang="ts">
  import { Banner } from 'gdpr-cooco-banner';
  import type { Translation } from 'gdpr-cooco-banner'



  let translation:Translation = {
    heading: 'GDPR Cookie Consent',
    description: 'We use cookies to offer a better browsing experience, analyze site traffic, personalize content, and serve targeted advertisements. Please review our privacy policy & cookies information page. By clicking accept, you consent to our privacy policy & use of cookies.',
    acceptLabel: 'Accept cookies',
    rejectLabel: 'Reject cookies',
    settingsLabel: 'Cookie settings',
    closeLabel: 'Close settings',
    editLabel: 'Edit cookie settings',
    
    cookieDescriptions: {
      necessary: 'Used for cookie control. Can\'t be turned off.',
      tracking: 'Used for advertising purposes.',
      analytics: 'Used to control Google Analytics, a 3rd party tool offered by Google to track user behavior.',
      marketing: 'Used for marketing data.'
    },
    cookieLabels: {
      necessary: 'Necessary cookies',
      tracking: 'Traccikng cookies',
      analytics: 'Analytics cookies',
      marketing: 'Marketing cookies'
    }
  }
</script>

<slot></slot>

<Banner {translation} choices={['necessary']}/>

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