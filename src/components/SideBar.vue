<template>
  <v-navigation-drawer app :value="_drawer">
    <v-list-item class="px-2">
      <v-list-item-avatar color="red">
        <span class="white--text text-h5">T</span>
      </v-list-item-avatar>

      <v-list-item-title>Dora CI</v-list-item-title>

      <v-btn icon @click="onToggleDrawer()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <template v-slot:append>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>

    <template v-slot:append>
      <v-divider></v-divider>
      <v-list>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";

import { mapGetters, mapMutations } from "vuex";

import { ON_TOGGLE_DRAWER } from "@/store/meta/constants";

export default Vue.extend({
  name: "SideBar",
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
    };
  },
  computed: {
    ...mapGetters(["_drawer"]),
  },
  methods: {
    ...mapMutations([ON_TOGGLE_DRAWER]),
  },
});
</script>

<style scoped></style>
