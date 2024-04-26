import { useEffect, useState } from 'react';

const List = () => {
   
  const getInitialTasks = () => {
    const list = localStorage.getItem("tasks");
    const savedTasks = JSON.parse(list);
     if (savedTasks === null) {
        return [];
     } 

    return savedTasks;
  }; 

  const [tasks, setTasks] = useState(getInitialTasks());
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleCompleted = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  return (
    <div className="list">
      <h2>Let's go!</h2>

      <div className="addToList">
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Add Todo</button>
      </div>

      <div className="taskList">
      <ul>
        {tasks.map((tasks, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: tasks.completed ? "line-through" : "none" }}
              onClick={() => toggleCompleted(index)}
            >
              {tasks.text}
            </span>
            <div>
            <button onClick={() => removeTask(index)}>Remove</button>
            <button onClick={() => toggleCompleted(index)}>Done</button>
            </div>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p>Nothing here.</p>}
      {tasks.length > 0 && tasks.every(task => task.completed) && <p>All done!</p>}
      </div>

    </div>
  ); 
}

export default List;
