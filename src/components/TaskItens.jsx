

const TaskItens = ({task}) => {
  return (
    <div>
        <h1>{task.description}</h1>
        <p>{task.isCompleted ? "Completa" : "Não completa"}</p>
    </div>
  )
}

export default TaskItens