<template>
  <v-container fill-height>
    <v-row class="min-h-screen" align="center" justify="center">
      <v-col class="text-center">
        <v-btn @click="counterStore.increment()">Count {{ count }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
</script>

<style lang="sass" scoped></style>