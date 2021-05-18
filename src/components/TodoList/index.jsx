import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};
function TodoList(props) {
  const { todos, onTodoClick } = props;

  const handleOnClick = (todo) => {
    if (!onTodoClick) return;
    onTodoClick(todo);
  };
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleOnClick(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
