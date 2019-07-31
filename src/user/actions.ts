import { State, Action } from "../state";

export type Actions = {
  login: Action;
};

export const actions = (state: State): Actions => {
  return {
    login: () => {
      state.setData({
        ...state.data,
        user: state.data.user ? undefined : state.initial.user
      });
    }
  };
};
