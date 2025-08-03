<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();

useHead({
  htmlAttrs: {
    lang: runtimeConfig.public.lang,
  },
  titleTemplate: (title) => title ? `${title} - ${runtimeConfig.public.title}` : runtimeConfig.public.title,
});
</script>

<style lang="scss" scoped></style>