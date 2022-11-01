import { useTodoLayerValue } from "./context/TodoContext";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content) return;
    const newTodo = {
      id: Math.floor(Math.random() * 428374324),
      content,
      isCompletes: false,
    };
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
    setContent("");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          className="todo-input"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          ref={inputRef}
        />
        <button className="todo-button">Ekle</button>
      </form>

      {/*Todo List */}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
