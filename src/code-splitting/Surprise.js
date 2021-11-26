import React, { useEffect } from "react";
//creado escenario

const Surprise = () => {
  useEffect(() => {
    //import dinamicos
    import("./Hello").then((mod) => mod.default());
  }, []);

  return (
    <div>
      <p>Surprise 🎉</p>
    </div>
  );
};

export default Surprise;
