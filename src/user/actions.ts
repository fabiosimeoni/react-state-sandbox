import { State, Action } from "../state";

export type Actions = {
  login: Action;
};

export const actions = (state: State): Actions => {
  return {
    login: () => {
      const { data, initial } = state;
      const username = data.user.username === initial.user.username ? "Franco" : initial.user.username;

      state.setData({ ...data, user: { ...data.user, username } });
    }
  };
};
