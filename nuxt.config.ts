// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@nuxt/content'
  ],
  css: [
    '~/assets/styles.scss',
    'primeicons/primeicons.css'
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },
  runtimeConfig: {
    public: {
      // Load from environment variables with fallback to empty strings
      appwriteUrl: process.env.APPWRITE_URL || '',
      appwriteProjectId: process.env.APPWRITE_PROJECT_ID || '',
    },
  },
  vite: {
    css: {
      preprocessorMaxWorkers: true // number of CPUs minus 1
    }
  }

})
