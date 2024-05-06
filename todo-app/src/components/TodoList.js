import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <ul className="allTodo">
      {props.todos.map((t) => (
        <li className="singleTodo" key={t.id}>
          <span className="listText">{t.todo}</span>
          <button onClick={() => props.handleEdit(t.id)}>Edit</button>
          <button onClick={() => props.handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
