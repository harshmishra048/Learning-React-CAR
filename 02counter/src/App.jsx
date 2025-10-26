import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 10;
  
  const addValue = () => {
    // console.log("Value Added", counter);
    // counter = counter + 1;
    // setCounter(counter)

    //another method
    // setCounter(counter + 1)

    if (counter < 20) {
      setCounter(counter + 1)
    }
    else {
      alert('limit exceed')
    }
  }
  const removeValue = () => {
    // console.log("Value Deducted", counter);
    // counter = counter - 1;
    // setCounter(counter)
    
    //another method
    // setCounter(counter - 1)

    if (counter > 0) {
      setCounter(counter - 1)
    }
    else {
      alert('cant decrease more')
    }
    
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
