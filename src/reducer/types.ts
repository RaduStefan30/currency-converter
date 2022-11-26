export interface IState {
  currencies: null | any;
  currencyRates: null | any;
  message: string;
  loading: boolean;
}

export type RepositoryActions =
  | "FETCH"
  | "FETCH_CURRENCIES"
  | "FETCH_CURRENCY_RATES"
  | "ERROR";

export interface IAction {
  type: RepositoryActions;
  payload: any;
}
