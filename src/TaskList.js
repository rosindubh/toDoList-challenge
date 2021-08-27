const TaskList = ({tasks, setTasks}) => {
    const deleteHandler = (index) => {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
    }
    
    return (
    <div>
        {tasks.map((task, index) => {
            return (
                <>
                    <button className="remove-btn" onClick={() => deleteHandler(index)}>Delete</button>
                    <p>{task}</p>
                
                </>
            )
        })}
    </div>
    )
}

export default TaskList