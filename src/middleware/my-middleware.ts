export default defineNuxtRouteMiddleware((to) => {

  if (to.query.id === "1") {

    return abortNavigation();
  }

  if (to.path !== "/") {

    return navigateTo("/");
  }
});
