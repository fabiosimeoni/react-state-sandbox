import { State } from ".";

import { Actions as UserActions, actions as useractions } from "../user";
import { Actions as OtherActions, actions as otheractions } from "../other";

export type Action = () => void;

//  joins all known action types
export type Actions = { user: UserActions } & { other: OtherActions };

//  invoked when creating the state in order to set in the state itself
//  all the actions of all known action types, closing them over the state.
export const actions = (state: State) => ({
  user: useractions(state),
  other: otheractions(state)
});
