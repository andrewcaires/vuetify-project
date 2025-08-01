<template>
  <v-app>
    <v-main>
      <v-container fill-height>
        <v-row class="min-h-screen" align="center" justify="center">
          <v-col class="text-center">
            <h1 class="text-h1">{{ error.statusCode }}</h1>
            <h2 v-if="error.statusCode === 404" class="text-h4 mt-4">Page Not Found</h2>
            <h2 v-else class="text-h4 mt-4">An Error Occurred</h2>
            <p class="text-body-1 mt-2">{{ error.statusMessage || error.message }}</p>
            <v-btn class="mt-8" color="primary" @click="goHome">Go Home</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
defineProps({
  error: { type: Object, required: true },
});

const goHome = async () => {

  await navigateTo("/");
};
</script>

<style lang="scss" scoped></style>