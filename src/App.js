import React, { useState } from "react";
import TextInput from "./components/TextInput.js";


function App() {

  const[task,setTask]=useState("");
  const[tasks,setTasks]=useState([]);

  const handleTaskChange = (e)=>{
    if (e){
      setTask(e.target.value)
    }
  }

  const handleTasksUpdate = (e)=>{
    if (e && task.length >3){
      let tasksCopy=[...tasks];
      tasksCopy.push(task);
      setTasks(tasksCopy);
      setTask("")
    }
  }

  return (

    <div>
      <h1>TO DO LIST</h1>
<TextInput
placeholder="Enter the task"
id="task"
name="task"
value={task}
onChange={handleTaskChange}
/>
<button onClick={handleTasksUpdate}>
  Add task
</button>

<div>
  <ul>
    {tasks.length>0?(tasks.map((t,i)=><li key={i}>{t}</li>)):(
<p>No Task</p>
    )}
  </ul>
</div>
  </div>
  
  );
}

export default App;
