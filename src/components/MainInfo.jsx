import React, { useContext } from "react";
import { FormContext } from "./Form";

const MainInfo = () => {
  const ctx = useContext(FormContext);
  return (
    <div>
      <input
        type="email"
        value={ctx.email}
        onChange={(e) => ctx.setEmail(e.target.value)}
      />
      <input type="password" />
    </div>
  );
};

export default MainInfo;

{
  /* <input
  oneChange={(e) => ctx.setEmail(e.target.value)}
  type="email"
  value={ctx.email}
/>; */
}
