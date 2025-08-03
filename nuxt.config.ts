import { join } from "path";

export default defineNuxtConfig({

  runtimeConfig: {
    apiSecret: "",
    public: {
      lang: "",
      title: "",
      api_base: "",
      api_url: "http://localhost:4000",
      app_url: "",
    }
  },

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
    server: {
      allowedHosts: true,
    },
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
