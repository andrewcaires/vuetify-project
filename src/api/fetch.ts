import { Cookie } from "@andrewcaires/cookie";
import { Fetch } from "@andrewcaires/fetch";

import { Env } from "@/config";

export const fetch = new Fetch({

  url: Env.API_URL,
  timeout: Env.API_TIMEOUT,

});

fetch.on("before", (request) => {

  request.headers["Authorization"] = "Bearer " + Cookie.get("Authorization");
});
