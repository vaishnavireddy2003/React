import React, { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddTask = () => {
    if (task.trim() && editingIndex === null) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && editingIndex === null) {
      handleAddTask();
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    setEditText(tasks[index]);
  };

  const handleUpdateTask = (event, index) => {
    if (event.key === "Enter" && editText.trim()) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = editText;
      setTasks(updatedTasks);
      setEditingIndex(null);
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleAddTask} disabled={editingIndex !== null}>
        Add Task
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {editingIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => handleUpdateTask(e, index)}
                autoFocus
              />
            ) : (
              <span onClick={() => handleEditTask(index)}>{task}</span>
            )}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;