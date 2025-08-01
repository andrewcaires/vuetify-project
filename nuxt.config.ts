import { join } from "path";

export default defineNuxtConfig({

  srcDir: "src",

  compatibilityDate: "2024-11-01",

  devtools: {
    enabled: true,
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "vuetify-nuxt-module",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
  ],

  ssr: true,

  features: {
    inlineStyles: false,
    devLogs: false,
  },

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },

  nitro: {
    output: {
      dir: join(__dirname, "dist"),
    },
  },

  css: [],

  vuetify: {
    moduleOptions: {
      ssrClientHints: {
        reloadOnFirstRequest: false,
        viewportSize: true,
        prefersColorScheme: false,
        prefersColorSchemeOptions: {
          useBrowserThemeOnly: false,
        },
      },
      styles: {
        configFile: "assets/settings.scss",
      },
    },
  },

});
