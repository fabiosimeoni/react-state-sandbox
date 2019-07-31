import { State, Action } from "../state";

export type Actions = {
  swap: Action;
};

export const actions = (state: State): Actions => ({
  swap: () => {
    const { initial } = state;

    state.set(data => data.info = data.info === initial.info ? "other info" : initial.info);
  }
});
