export interface IAccount {
  token: string;
}

export interface IAuthModule {
  accounts: IAccount[];
  accountIndex: number;
}
