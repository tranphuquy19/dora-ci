import { Module, Mutation, VuexModule } from "vuex-module-decorators";

import { ON_TOGGLE_DRAWER } from "./constants";

@Module
export default class MetaModule extends VuexModule {
  drawer = false;

  get _drawer(): boolean {
    return this.drawer;
  }

  @Mutation
  [ON_TOGGLE_DRAWER](): void {
    this.drawer = !this.drawer;
  }
}
