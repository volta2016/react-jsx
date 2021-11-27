import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Button = () => {
  const context = useContext(ThemeContext);
  console.log(context);
  return (
    <button
      style={{ backgroundColor: context.backgroundColor, color: context.color }}
    >
      Click me!
    </button>
  );
};

export default Button;
