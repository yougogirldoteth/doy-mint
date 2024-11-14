export default defineNuxtConfig({
  ssr: false,
  
  extends: '@visualizevalue/mint-app-base',

  alias: {
    '@base': '@visualizevalue/mint-app-base',
  },

  css: [
    '@base/assets/styles/index.css', // Extend the base theme styles
    '~/assets/styles.css', // Add our own styles
  ],

})