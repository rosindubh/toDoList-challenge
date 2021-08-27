const TaskList = ({tasks}) => {
    return (
    <div>
        {tasks.map((task) => {
            return <p>{task}</p>
})}
    </div>
    )
}

export default TaskList