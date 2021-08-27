// phil welsby - 26 aug 2021

const InputDisplay = (props) => {

  const addTaskHandler = () => {
    const newTasks = [...props.tasks]
      newTasks.push(props.input)
      props.setTasks(newTasks)
      props.setInput("")
    }
    return (
      <div>
        {/* <p>{props.input}</p> */}
        <input  
        value={props.input}
        type="text" 
        onChange={(event) => props.setInput(event.target.value)} />
        <button className="submit-btn" onClick={addTaskHandler}>Submit task</button>
      </div>
    )
  }

export default InputDisplay