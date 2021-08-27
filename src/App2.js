// link - https://www.codespeedy.com/what-is-usestate-hook-in-reactjs/
import React,{useState} from "react";


  const App = () => {

    function handleChange(e) {
        console.log(e.target.value);
    }

      const [add,setAdd]=useState(0);
      const [remove,setRemove]=useState(0);
      return (
          <div>
            <input onChange={handleChange}></input>
            <button onClick={()=>setAdd(add+1)}>Submit</button>
            <p>{add}</p>
            <input></input>
            <button onClick={()=>setRemove(remove+1)}>Remove</button>
            <p>{remove}</p>
          </div>
      )
  }

export default App



















// import { useState } from "react"


// const App2 = () => {
    

//     const [list, setList] = useState([""])

//     // add item to array
//     const addHandler = () => {
//         let storedItems = [...list]
//         storedItems.push(storedItems[storedItems.length -1] + "item ")
//         setList(storedItems)
//     }



//     return (
//         <div>
//             {list.map((lastItem) => {
//             return <h3>{lastItem}</h3>
//             })}
//             <button onClick={addHandler}>Submit</button>
//             <input type="text"></input>
//         </div>
//     )
// }



// export default App2