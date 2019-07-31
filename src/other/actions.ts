import { State, Action } from "../state";

export type Actions = {
  swap: Action;
};

export const actions = (state: State): Actions => ({
  swap: () => {
    state.setData({
      ...state.data,
      other: state.data.other === "another" ? "other" : "another"
    });
  }
});
