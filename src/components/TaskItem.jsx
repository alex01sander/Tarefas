import './TaskItem.scss'
import axios from 'axios'
import {useAlert} from 'react-alert'

import {AiFillDelete} from 'react-icons/ai'


const TaskItem = ({task, fetchTasks}) => {
  const alert = useAlert()
  const handleTaskDelete = async () =>{
    try {
      await axios.delete(`https://fsc-task-manager-backend.herokuapp.com/tasks/${task._id}`);

      fetchTasks()
      
      alert.success('A tarefa foi removida com sucesso!')
    } catch (error) {
      alert.error('Algo deu errado!')
    }
  }



  return (
    <div className="task-item-container">
      <div className="task-description">
        <label className={
          task.isCompleted ? 'checkbox-container-completed' : "checkbox-container"
        }>
          {task.description}
          <input type="checkbox" defaultChecked={task.isCompleted} />
          <span className={
            task.isCompleted ? 'checkmark completed' : 'checkmark'
          }></span>
        </label>
      </div>
      <div className="delete">
          <AiFillDelete size={18} color='#F97474' onClick={handleTaskDelete}/>
         
      </div>
    </div>
  )
}

export default TaskItem