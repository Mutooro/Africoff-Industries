export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://africoff.com',
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s · AFRICOFF Industries (U) Limited',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0A2413' },
        { name: 'description', content: 'AFRICOFF Industries connects Ugandan coffee growers with quality processing and global markets.' },
        { name: 'robots', content: 'index, follow' },
      ],
    },
  },
  nitro: { prerender: { routes: ['/'] } },
  compatibilityDate: '2026-09-05',
  devtools: { enabled: true },
})
