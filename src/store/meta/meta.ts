import { Module, Mutation, VuexModule } from "vuex-module-decorators";

import { ON_TOGGLE_DRAWER } from "./constants";
import { IMetaModule } from "./interfaces";

@Module
export default class MetaModule extends VuexModule implements IMetaModule {
  drawer = false;

  get _drawer(): boolean {
    return this.drawer;
  }

  @Mutation
  [ON_TOGGLE_DRAWER](): void {
    this.drawer = !this.drawer;
  }
}
