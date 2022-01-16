import { Module, Mutation, VuexModule } from "vuex-module-decorators";

import {
  ADD_TOKEN,
  REMOVE_ALL_TOKENS,
  REMOVE_TOKEN,
  SET_TOKEN_INDEX,
} from "./constants";
import { IAuthModule, IAuthState } from "./interfaces";

@Module
export default class AuthModule extends VuexModule implements IAuthModule {
  accounts: IAuthState[] = [];
  accountIndex = -1;

  get _token(): string {
    return this.accounts[this.accountIndex]?.token ?? "";
  }

  get _tokenIndex(): number {
    return this.accountIndex;
  }

  @Mutation
  [ADD_TOKEN](token: string): void {
    this.accounts.push({ token });
  }

  @Mutation
  [SET_TOKEN_INDEX](tokenIndex: number): void {
    this.accountIndex = tokenIndex;
  }

  @Mutation
  [REMOVE_TOKEN](tokenIndex: number): void {
    this.accounts.splice(tokenIndex, 1);
  }

  @Mutation
  [REMOVE_ALL_TOKENS](): void {
    this.accounts = [];
    this.accountIndex = -1;
  }
}
