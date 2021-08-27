// phil welsby - 26 aug 2021

import {useState} from "react"
import TaskList from "./TaskList"
import InputDisplay from "./InputDisplay"
import OutputDisplay from "./OutputDisplay"
import "./App.css"
const App3 = () => {

const [input, setInput] = useState("")
const [tasks, setTasks] = useState([])
const [removeInput, setRemoveInput] = useState("")


  return (
    <div>
    <h1 className="heading">To-Do List Challenge</h1>
    <TaskList 
      tasks={tasks}
    />
    <InputDisplay 
    input={input}
    setInput={setInput}
    tasks={tasks}
    setTasks = {setTasks}
    />
    <OutputDisplay 
    removeInput={removeInput}
    setInput={setInput}
    tasks={tasks}
    setTasks = {setTasks}
    />
    </div>
  )
}

export default App3
