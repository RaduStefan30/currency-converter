import { IAction, IState } from "./types";

export const initialState: IState = {
  currencies: null,
  currencyRates: null,
  message: "",
  loading: false,
};

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_CURRENCIES":
      return {
        ...state,
        currencies: action.payload.currencies,
        loading: false,
      };
    case "FETCH_CURRENCY_RATES":
      return {
        ...state,
        currencyRates: action.payload.currencyRates,
        loading: false,
      };
    case "ERROR":
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
