import { useState } from "react";
import { useDispatch } from 'react-redux';
import { increment,decrement,addAmount} from "./counterSlice";
function FormCounter(props) {
    const[amountInput,setAmountInput]=useState("0")

    const dispach=useDispatch()
        return (
        <div>
        <input value={amountInput} onChange={(e)=>setAmountInput(e.target.value)}></input>
        <button onClick={()=>dispach(addAmount(Number(amountInput)))}>AddAmount</button>
        <br/>
        <button onClick={()=>{dispach(increment())}}>Increment</button>
        <button onClick={()=>{dispach(decrement())}}>Increment</button>
 
        </div> 
        );
}
export default FormCounter;
