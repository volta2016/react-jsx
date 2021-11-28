import React, { useState } from "react";
import MainInfo from "./MainInfo";
import Skills from "./Skills";

export const FormContext = React.createContext();

const Form = () => {
  //podemos asumir que es un state
  const [email, setEmail] = useState("correo@gmail.com");
  const [password, setPassword] = useState("");
  const [likes, setLikes] = useState("");

  return (
    <form>
      <FormContext.Provider
        value={{ email, password, likes, setEmail, setPassword, setLikes }}
      >
        <MainInfo />
        <Skills />
      </FormContext.Provider>
      <div>
        <p>Email: {email}</p>
        <p>Contraseña:</p>
        <p>Lenguaje: {likes}</p>
      </div>
    </form>
  );
};

export default Form;
