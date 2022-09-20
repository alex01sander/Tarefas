import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import TaskItens from './components/TaskItens';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: '1', 
      description: 'Estudar programação',
      isCompleted: false,
    },
  ])

  const fetchTasks = async () => {
    try {
        const { data } = await axios.get("https://fsc-task-manager-backend.herokuapp.com/tasks")
        console.log(data)
        setTasks(data);
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    fetchTasks();
}, []);
  return (
    <div className="App">
      <div>
      {tasks.map((task)=>(
        <TaskItens key={task.id} task={task}/>
        
      ))}
    </div>
    </div>
  );
}

export default App;
