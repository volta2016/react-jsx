import React, { useEffect, useState, useRef } from "react";
import { render } from "react-dom";

const Form = ({ showed }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const firstInput = useRef();

  useEffect(() => {
    if (showed) {
      //autoFocus
      console.log({ firstInput });
      firstInput.current.focus();
    }
  }, [showed]);

  const sendForm = (e) => {
    e.preventDefault();
    //petición AJAX
    console.log("ejecuto el evento");
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setTitle("");
        setBody("");
        console.log(json);
      });
  };

  return (
    <form onSubmit={(e) => sendForm(e)}>
      {/*SyntheticEvent instancia con la info del (e)*/}
      <div>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          value={title}
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          ref={firstInput}
        />
      </div>
      <div>
        <label htmlFor="body">Publicación </label>
        <textarea
          name="publish"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <input type="submit" value="Enviar" />
    </form>
  );
};

const Accordion = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Mostrar Formulario</button>
      {show && <Form showed={show} />}
    </div>
  );
};

const App = () => {
  return (
    <>
      <Accordion />
    </>
  );
};

export default App;

render(<App />, document.getElementById("root"));
