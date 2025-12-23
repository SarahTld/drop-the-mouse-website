// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // Needed so assets are resolved correctly on GitHub Pages under /drop-the-mouse-website/
    baseURL: '/drop-the-mouse-website/'
  },
  nitro: {
    // Optimize output for GitHub Pages
    preset: 'github-pages'
  },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  }
})
