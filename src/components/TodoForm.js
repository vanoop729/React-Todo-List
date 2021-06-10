import React from "react";
import { useState, useEffect, useRef } from "react";
import { AiFillDelete } from "react-icons/ai";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //To focus on the input field
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        //   For editing only
        <>
          <input
            type="text"
            maxLength="35"
            placeholder="Update todo"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <div>
          <input
            type="text"
            maxLength="35"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add Todo</button>

          <AiFillDelete
            onClick={() => props.delAll()}
            className="delete-all"
            title="Delete All"
          />
        </div>
      )}
    </form>
  );
}

export default TodoForm;
