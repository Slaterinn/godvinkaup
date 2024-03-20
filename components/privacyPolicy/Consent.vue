<template>
  <div ref="consentBanner">
    <!-- Placeholder for Cookie Consent banner -->
  </div>
</template>

<script>
export default {
  mounted() {
    // Execute scripts only on the client-side
    if (process.client) {
      // Include external JavaScript for Cookie Consent
      const consentScript = document.createElement('script');
      consentScript.src = '//www.freeprivacypolicy.com/public/cookie-consent/4.1.0/cookie-consent.js';
      consentScript.charset = 'UTF-8';
      document.body.appendChild(consentScript);

      // Initialize Cookie Consent when script is loaded
      consentScript.onload = () => {
        cookieconsent.run({
          "notice_banner_type": "simple",
          "consent_type": "express",
          "palette": "light",
          "language": "en",
          "page_load_consent_levels": ["strictly-necessary"],
          "notice_banner_reject_button_hide": false,
          "preferences_center_close_button_hide": false,
          "page_refresh_confirmation_buttons": false,
          "website_name": "www.godvinkaup.is",
          "website_privacy_policy_url": "www.godvinkaup.is/policy"
        });
      };
    }
  }
};
</script>
