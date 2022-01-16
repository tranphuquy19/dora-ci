import { Module } from "vuex";

import { ON_TOGGLE_DRAWER } from "./constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const metaModule: Module<any, any> = {
  state: {
    drawer: false,
  },
  getters: {
    _drawer: (state) => state.drawer,
  },
  mutations: {
    [ON_TOGGLE_DRAWER]: (state) => (state.drawer = !state.drawer),
  },
  actions: {},
  modules: {},
};

export default metaModule;
