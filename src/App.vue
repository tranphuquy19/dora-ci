<template>
  <v-app>
    <NavBar />

    <v-content class="pt-10">
      <v-container fluid>
        <SideBar />
        <router-view />
        <Footer />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
import Footer from "./components/Footer.vue";

export default Vue.extend({
  components: { SideBar, NavBar, Footer },
  name: "App",

  data: () => ({
    //
  }),
});
</script>
