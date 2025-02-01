declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APPWRITE_URL: string;
      APPWRITE_PROJECT_ID: string;
      GOOGLE_ADSENSE_ID: string;
      GOOGLE_ADSENSE_TEST_MODE: string;
    }
  }
}
export { };