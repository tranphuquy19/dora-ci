import { Module, Mutation, VuexModule } from "vuex-module-decorators";
import { ADD_TOKEN, REMOVE_ALL_TOKENS, REMOVE_TOKEN } from "./constants";

@Module
export default class AuthModule extends VuexModule {
  tokens: string[] = [];

  get _tokens(): string[] {
    return this.tokens;
  }

  @Mutation
  [ADD_TOKEN](token: string): void {
    this.tokens.push(token);
  }

  @Mutation
  [REMOVE_TOKEN](token: string): void {
    this.tokens = this.tokens.filter((t) => t !== token);
  }

  @Mutation
  [REMOVE_ALL_TOKENS](): void {
    this.tokens = [];
  }
}
