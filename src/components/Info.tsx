import React from "react";
import { State, connect } from "../state";

const Compo = ({ data, actions }: State) => {
  console.log("Info other consumer rendering...");

  return (
    <div>
      Info: {data.info} <button onClick={() => actions.other.swap()}>change</button>
    </div>
  );
};

export const Info = connect(
  Compo,
  data => [data.info]
);
