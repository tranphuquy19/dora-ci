<template>
  <v-footer padless app>
    <v-col cols="12" class="pa-0">
      <v-system-bar dark color="dark">
        <v-spacer></v-spacer>
        <span>12:30</span>
      </v-system-bar>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
});
</script>

<style scoped></style>
