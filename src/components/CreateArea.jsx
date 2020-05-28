import React, { useState } from "react";

function CreateArea(props) {
  const [userInput, setUserInput] = useState({ title: "", content: "" });

  function handleUserInput(event) {
    const { name, value } = event.target;
    setUserInput((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.InsertNote(userInput);
    setUserInput({ title: "", content: "" });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleUserInput}
          value={userInput.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleUserInput}
          value={userInput.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
