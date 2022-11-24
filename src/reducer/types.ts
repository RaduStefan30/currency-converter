export interface IState {
  data: null | any;
  message: string;
  loading: boolean;
}

export type RepositoryActions = "FETCH" | "FETCHED" | "ERROR";

export interface IAction {
  type: RepositoryActions;
  payload: any;
}
