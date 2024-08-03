// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //useHead({})
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=2.0',
      link: [{rel:"stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css", integrity:"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
      crossorigin:"anonymous"
      }],
      title: "Our first application"
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxt/content']
})
