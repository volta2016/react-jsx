import React, { useState } from "react";
import { render } from "react-dom";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

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

const App = () => {
  return (
    <>
      <Form />
    </>
  );
};

export default App;

render(<App />, document.getElementById("root"));
