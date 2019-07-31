import React, { useContext, useState, useMemo } from "react";
import { Model, State, initial, actions } from ".";
import produce from "immer";

const StateContext = React.createContext<State>(null);

//  custom name for the Provider
export const StateProvider = StateContext.Provider;

// custom hook for all Consumers
const useAppState = (): State => {
  return useContext<State>(StateContext);
};

// custom hook for the Provider
export const useCreateState = (): State => {
  const [data, updater] = useState(initial);

  const initialState = {
    initial: initial,
    actions: undefined,
    data,
    set: undefined
  };

  initialState.actions = actions(initialState);
  initialState.set = fun => updater(produce(data => void fun(data)));

  return initialState;
};

export const connect = (Compo: (s: State) => JSX.Element, dependencies?: (data: Model) => [any]) => {
  return () => Stateful(Compo, dependencies);
};

const Stateful = (Compo: (s: State) => JSX.Element, dependencies?: (data: Model) => [any]) => {
  const state = useAppState();
  const deps = dependencies ? dependencies(state.data) : [state];
  // eslint-disable-next-line
  return useMemo(() => Compo({ ...state }), deps);
};
