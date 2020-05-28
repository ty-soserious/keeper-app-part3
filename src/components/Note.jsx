import React, { useState } from "react";

function Note(props) {
  const [completed, setCompleted] = useState(false);

  function handleComplete() {
      setCompleted((prevValue) => !prevValue);
  }

  return (
    <div className="note">
      <h1 onClick={handleComplete} style={{ textDecoration: completed ? "line-through" : "none" }}> {props.title} </h1>
      <p style={{ textDecoration: completed ? "line-through" : "none" }}>{props.content}</p>
      <button onClick={() => props.DeleteNote(props.id)}>DELETE</button>
    </div>
  );
}

export default Note;
