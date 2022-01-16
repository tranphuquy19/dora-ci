export interface IAuthState {
  token: string;
}

export interface IAuthModule {
  accounts: IAuthState[];
  accountIndex: number;
}
