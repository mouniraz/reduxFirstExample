import FormCounter from "./formCounter";
import { useSelector } from "react-redux";
import { selectCount } from "./counterSlice";
function Counter() {
    const count=useSelector(selectCount)
    return ( 
        <div>
            <h1>Counter with redux</h1>
            <h2>{count}</h2>
            <FormCounter />
            bonjour
        </div>
     );
}

export default Counter;