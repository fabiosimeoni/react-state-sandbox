import { State, Action } from "../state";

export type Actions = {
  swap: Action;
};

export const actions = (state: State): Actions => ({
  swap: () => {
    const { data, initial } = state;
    const info = data.info === initial.info ? "other info" : initial.info;

    state.setData({ ...data, info });
  }
});
