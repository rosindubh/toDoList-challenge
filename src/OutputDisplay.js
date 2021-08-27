// phil welsby - 26 aug 2021

const OutputDisplay = (props) => {

  const deleteByIndex = (index) => {
    const newTasks = [...props.tasks]
      newTasks.splice(index, 1)
      props.setTasks(newTasks)
      props.setInput("")
    }
    return (
      <div>
        {/* <p>{props.input}</p>  */}
        <input  
        value={props.input}
        type="text" 
        onChange={(event) => props.setInput(event.target.value)} />
        <button className="remove-btn" onClick={deleteByIndex}>Remove task</button>
      </div>
    )
  }

export default OutputDisplay 
