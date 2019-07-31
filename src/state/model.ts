import { Model as User, initial as initialUser } from "../user";
import { Model as Other, initial as initialOther } from "../other";
import { Actions } from ".";

export type State = {
  data: Model;
  initial: Model;
  actions: Actions;
  setData: React.Dispatch<React.SetStateAction<Model>>;
};

export type Model = { user: User } & { other: Other };

export const initial: Model = { user: initialUser, other: initialOther };
