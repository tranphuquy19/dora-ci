<template>
  <v-app-bar dense app color="primary" dark>
    <v-app-bar-nav-icon @click="onToggleDrawer()"></v-app-bar-nav-icon>
    <router-link
      :to="{ name: 'Home' }"
      tag="div"
      class="d-flex align-center"
      id="home-icon"
    >
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
      <v-toolbar-title>DoraCI</v-toolbar-title>
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
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  name: "NavBar",
  data: () => ({
    drawer: false,
  }),
  methods: {
    ...mapMutations(["onToggleDrawer"]),
  },
});
</script>

<style scoped>
#home-icon {
  cursor: pointer;
}
</style>
