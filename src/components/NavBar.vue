<template>
  <v-app-bar dense app color="primary" dark>
    <v-app-bar-nav-icon @click="onToggleDrawer()"></v-app-bar-nav-icon>
    <router-link :to="{ name: 'Home' }" custom v-slot="{ href, navigate }">
      <div
        class="d-flex align-center"
        id="home-icon"
        :href="href"
        @click="navigate"
      >
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="33"
        />
        <v-toolbar-title>DoraCI</v-toolbar-title>
      </div>
    </router-link>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="() => {}">
          <v-list-item-title>Add Key</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

import { mapMutations } from "vuex";

import { ON_TOGGLE_DRAWER } from "@/store/meta/constants";

export default Vue.extend({
  name: "NavBar",
  data: () => ({
    drawer: false,
  }),
  methods: {
    ...mapMutations([ON_TOGGLE_DRAWER]),
  },
});
</script>

<style scoped>
#home-icon {
  cursor: pointer;
}
</style>
