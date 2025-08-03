export default defineNuxtPlugin((nuxtApp) => {

  nuxtApp.hook("vuetify:before-create", (options) => {

    if (import.meta.env.MODE == "production") {

      return;
    }

    if (import.meta.client) {

      console.log("vuetify:before-create", options);
    }
  });
});
