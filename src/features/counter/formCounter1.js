import { useState } from "react";

function FormCounter1(props) {
    const[amountInput,setAmountInput]=useState("0")
    return (
        <div>
        <input value={amountInput} onChange={(e)=>setAmountInput(e.target.value)}></input>
        <button >AddAmount</button>
        <br/>
        <button onClick={()=>props.setCounter(props.counter+1)}>Increment</button>
        <button>decrement</button>            
        </div> 
        );
}

export default FormCounter1;