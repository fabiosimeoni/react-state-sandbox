import { State, Action } from "../state";

export type Actions = {
  login: Action;
};

export const actions = (state: State): Actions => ({
  login: () => {
    const initial = state.initial.user.username;
    state.set(copy => (copy.user.username = copy.user.username === initial ? "Franco" : initial));
  }
});
