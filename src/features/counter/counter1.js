import FormCounter from "./formCounter1";
import {useState} from "react"
function Counter1() {
const [counter,setCounter]=useState(0)
    return ( 
        <div>
            <h1>Counter with redux</h1>
            <h2>{counter}</h2>
            <FormCounter counter={counter} setCounter={setCounter}/>
        </div>
     );
}
export default Counter1;