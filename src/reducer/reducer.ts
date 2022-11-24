import { IAction, IState } from "./types";

export const initialState: IState = {
  data: null,
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
    case "FETCHED":
      return {
        ...state,
        data: action.payload.data,
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
