import { User, initial as initialUser } from "../user";
import { Info, initial as initialInfo } from "../info";
import { Actions } from ".";

export type State = {
  data: Model;
  initial: Model;
  actions: Actions;
  setData: React.Dispatch<React.SetStateAction<Model>>;
};

export type Model = { user: User } & { info: Info };

export const initial: Model = { user: initialUser, info: initialInfo };
