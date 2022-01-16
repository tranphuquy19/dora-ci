import Vue from "vue";

import Vuex, { createLogger } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

import AuthModule from "./auth/state";
import MetaModule from "./meta/meta";

const ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

const debug = process.env.VUE_APP_NODE_ENV !== "production";

const plugins = [
  createPersistedState({
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
    },
  }),
];

if (debug) {
  plugins.push(createLogger());
}

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    AuthModule,
    MetaModule,
  },
  plugins: plugins,
});
