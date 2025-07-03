<template>
  <div class="min-h-screen flex flex-col">
    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKW6GJL7"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <!-- /GTM (noscript) -->

    <!-- Header Component -->
    <AppHeader />
    
    <!-- Main Content Area -->
    <main class="flex-1">
      <slot />
    </main>
    
    <!-- Footer Component -->
    <AppFooter />
  </div>
</template>

<script setup>
import { useHead } from '#imports'

useHead({
  script: [
    {
      hid: 'gtm-script',
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MKW6GJL7');`,
      type: 'text/javascript'
    }
  ]
})
</script>
