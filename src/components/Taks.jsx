import { useState, useEffect, useMemo } from "react";
import axios from "axios";

import './Taks.scss'

import TaskItens from "./TaskItem";
import AddTask from "./AddTask";

const Taks = () => {
    const [tasks, setTasks] = useState([])
    
      const fetchTasks = async () => {
        try {
            const { data } = await axios.get("https://fsc-task-manager-backend.herokuapp.com/tasks")
            console.log(data)
            setTasks(data);
        } catch (_error) {
            console.log(_error);
        }
    };

    const lastTask = useMemo(() => {
        return tasks.filter(task => task.isCompleted === false)
    }, [tasks])

    const completedTask = useMemo(() => {
        return tasks.filter(task => task.isCompleted === true)
    }, [tasks])
    
    useEffect(() => {
        fetchTasks();
    }, []);
  return (
    <div className="tasks-container">
        <h2>Minhas Tarefas</h2>

        <div className="last-tasks">
            <h3>Ultimas Tarefas</h3>
            <AddTask fetchTasks={fetchTasks}/>
            <div className="tasks-list">
                {lastTask.map((lastTask)=> (
                    <TaskItens key={lastTask.id} task={lastTask} fetchTasks={fetchTasks}/>
                ))}
                
            </div>
        </div>

        <div className="completed-tasks">
            <h3>Tarefas Concluidas</h3>
            <div className="tasks-list">
                {completedTask.map((completedTask)=>(
                    <TaskItens key={completedTask.id} task={completedTask}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Taks