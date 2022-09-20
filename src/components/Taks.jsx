import { useState, useEffect } from "react";
import axios from "axios";

import './Taks.scss'

import TaskItens from "./TaskItens";

const Taks = () => {
    const [tasks, setTasks] = useState([])
    
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
    <div className="tasks-container">
        <h2>Minhas Tarefas</h2>

        <div className="last-tasks">
            <h3>Ultimas Tarefas</h3>
            <div className="tasks-list">
                {tasks.filter(task => task.iscompleted === false).map((lastTask)=> (
                    <TaskItens task={lastTask}/>
                ))}
                
            </div>
        </div>

        <div className="completed-tasks">
            <h3>Tarefas Concluidas</h3>
            <div className="tasks-list">
                {tasks.filter(task => task.iscompleted).map((completedTask)=>(
                    <TaskItens task={completedTask}
                ))}
            </div>
        </div>
    </div>
  )
}

export default Taks