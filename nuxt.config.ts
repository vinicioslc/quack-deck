// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@nuxt/content',
    '@nuxtjs/google-adsense'
  ],
  css: [
    '~/assets/styles.scss',
    'primeicons/primeicons.css'
  ],
  runtimeConfig: {
    public: {
      googleAdsense: {
        id: process.env.GOOGLE_ADSENSE_ID,
        test: process.env.GOOGLE_ADSENSE_TEST_MODE === 'true',
      },
      // Load from environment variables with fallback to empty strings
      appwriteUrl: process.env.APPWRITE_URL || '',
      appwriteProjectId: process.env.APPWRITE_PROJECT_ID || '',
    },
  },
  //  @ts-ignore
  googleAdsense: {
    onPageLoad: false,
    pageLevelAds: false,
  },
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },
  vite: {
    css: {
      preprocessorMaxWorkers: true // number of CPUs minus 1
    }
  }

})
