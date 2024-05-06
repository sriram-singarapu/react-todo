import React from "react";

const TodoForm = (props) => {
  return (
    <div>
      <form className="todoForm" onSubmit={props.handleSubmit}>
        <input
          type="text"
          value={props.todo}
          onChange={(event) => props.setTodo(event.target.value)}
        ></input>
        <button type="submit">{props.editId ? "Edit" : "Go"}</button>
      </form>
    </div>
  );
};

export default TodoForm;
