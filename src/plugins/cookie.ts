import { Cookie } from "@andrewcaires/cookie";

import { Env } from "@/config";

export default defineNuxtPlugin((nuxtApp) => {

  nuxtApp.hook("vuetify:before-create", () => {

    Cookie.options({

      expires: Env.COOKIE_EXPIRES,

    });
  });
});
