// phil welsby - 26 aug 2021 - to do

import {useState} from "react"

const App = () => {
  const [items, setItems] = useState([])

// adds an item to an array
const addHandler = () => {
  let storedItems = [...items]
  storedItems.push(storedItems[storedItems.length - 1] + {input})
  setItems(storedItems)
}

//changeHandler
const [input, setInput] = useState("")

const changeHandler = (event) => {
  setInput(event.target.value)
}


// output to UI
  return (
    <div>
      <button onClick={addHandler}>submit</button>
      <input type="text" onChange={(event) => changeHandler(event)}></input>
      {items.map((storedItems) => {
        return <h3 key={storedItems} onClick={() => changeHandler(storedItems)}>{storedItems}</h3>
      })}
    </div>
  )
  
  //removes a item from UI if you click on it
  // const removeHandler = (index) => {
  //   let storedItems = [...items]
  //   storedItems.splice(index, 1)
  //   storedItems(storedItems)
  // }
  
  // return (
  //   <div>
  //     {items.map((index) => {
  //         return (
  //              <h1 key={index} onClick={() => removeHandler(index)}>{items}</h1>
  //        )
  //   })}
  //    </div>
  //  )
  }

export default App