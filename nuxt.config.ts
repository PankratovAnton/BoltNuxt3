// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  
  // Add Tailwind CSS and i18n modules
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/image'],
  

  // Configure CSS
  css: ['~/assets/css/main.css'],
  
  // Configure i18n
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'ru',
        name: 'Русский',
        file: 'ru.json'
      },
      {
        code: 'de',
        name: 'Deutsch',
        file: 'de.json'
      },
      {
        code: 'tr',
        name: 'Türkçe',
        file: 'tr.json'
      },
      {
        code: 'ua',
        name: 'Українська',
        file: 'ua.json'
      },
      {
        code: 'es',
        name: 'Español',
        file: 'es.json'
      },
      {
        code: 'pl',
        name: 'Polski',
        file: 'pl.json'
      }
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  
  // App configuration
  app: {
    head: {
      title: 'Attractions Website',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Discover amazing attractions around the world' }
      ],
      script: [
        // GetYourGuide
        {
          src: 'https://widget.getyourguide.com/dist/pa.umd.production.min.js',
          async: true,
          defer: true,
          'data-gyg-partner-id': 'RO6AILQ'
        },
        // Booking.com
        {
          src: 'https://aff.bstatic.com/static/affiliate_base/js/flexiproduct.js',
          async: true
        },
        // TripAdvisor (пример — конкретный скрипт для виджета)
        {
          src: 'https://www.jscache.com/wejs',
          async: true
        },
        {
          src: "https://www.anrdoezrs.net/am/101481970/impressions/page/am.js"
        }
      ]
    }
  }
  

})