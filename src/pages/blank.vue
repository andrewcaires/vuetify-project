<template>
  <v-container fill-height>
    <v-row class="min-h-screen" align="center" justify="center">
      <v-col class="text-center">
        <v-btn color="primary" @click="goHome">Go Home</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "blank",
  middleware: ["my-middleware"],
});

useSeoMeta({
  title: "Blank",
});

const goHome = async () => await navigateTo("/");
</script>

<style lang="sass" scoped></style>