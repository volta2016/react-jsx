import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Card = () => {
  const context = useContext(ThemeContext);
  return (
    <div
      style={{ backgroundColor: context.backgroundColor, color: context.color }}
    >
      Hola mundo 😃!
    </div>
  );
};

export default Card;
