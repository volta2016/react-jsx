import React, { useContext } from "react";
import { FormContext } from "./Form";

const Skills = () => {
  const context = useContext(FormContext);

  const addToList = (value) => {
    console.log(":0");
    context.setLikes([value].concat(context.likes));
  };

  const removeFromList = (value) =>
    context.setLikes(context.likes.filter((v) => v !== value));

  return (
    <div>
      <p>Email: {context.email}</p>
      <label htmlFor="">
        <input
          type="checkbox"
          onChange={(e) =>
            e.target.checked ? addToList("Ruby") : removeFromList("Ruby")
          }
          name="likes[]"
        />
        Ruby
      </label>
      <label htmlFor="">
        <input
          type="checkbox"
          onChange={(e) =>
            e.target.checked
              ? addToList("JavaScript")
              : removeFromList("JavaScript")
          }
          name="likes[]"
        />
        JavaScript
      </label>
    </div>
  );
};

export default Skills;
