import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [todo, setTodo] = useState([{ text: "test", completed: false }]);
  const inputref = useRef();

  const handleAddTask = () => {
    const text = inputref.current.value.trim();
    if (text === "") return;
    const newItem = { completed: false, text };
    setTodo([...todo, newItem]);
    inputref.current.value = "";
  };

  const handleToggleComplete = (index) => {
    const newTodo = [...todo];
    newTodo[index].completed = !newTodo[index].completed;
    setTodo(newTodo);
  };

  const handleDeleteTask = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {todo.map((item, index) => (
          <div className="item" key={index}>
            <li
              className={item.completed ? 'done' : ''}
              onClick={() => handleToggleComplete(index)}
            >
              {item.text}
            </li>
            <span onClick={() => handleDeleteTask(index)}>❌</span>
          </div>
        ))}
      </ul>

      <div className="input-container">
        <input type="text" placeholder="Add a new task" ref={inputref} />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
}

export default App;
