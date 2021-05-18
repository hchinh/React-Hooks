import { useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Football" },
    { id: 2, title: "Tennis" },
    { id: 3, title: "Volleyball" },
  ]);

  const handleTodoClick = (todo) => {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };
  return (
    <div className="App">
      <h3>Welcome to React Hooks</h3>
      <ColorBox />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
