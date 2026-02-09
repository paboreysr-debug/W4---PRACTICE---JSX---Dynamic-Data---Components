import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState(["Task 1"]);
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task !== "") {
      setList([...list, task]);
      setTask("");
    }
  };
  return (
    <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)}placeholder="Enter task"/>
      <button onClick={handleAdd}>Add Task</button>
      <ul>
        {list.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
