export class Env {

  public static readonly PORT = process.env.PORT ?? 3000;

  public static readonly API_URL = process.env.API_URL ?? "";
  public static readonly API_TIMEOUT = parseInt(process.env.API_TIMEOUT ?? "") || 2000;

  public static readonly COOKIE_EXPIRES = parseInt(process.env.COOKIE_EXPIRES ?? "") || 86400;

}
