import Vue from "vue";

import Vuex, { createLogger } from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

import AuthModule from "./auth/state";
import MetaModule from "./meta/meta";

const ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";
const plugins = debug
  ? [createLogger()]
  : [
      createPersistedState({
        storage: {
          getItem: (key) => ls.get(key),
          setItem: (key, value) => ls.set(key, value),
          removeItem: (key) => ls.remove(key),
        },
      }),
    ];

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
