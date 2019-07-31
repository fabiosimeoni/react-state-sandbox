import React, { memo } from "react";

export const Compo = () => {
  console.log("rendering MyButton");

  return <div>Another Component</div>;
};

export const MyButton = memo(Compo);
