import { useState } from "react";
const Cart=()=>
{
    const[count,setCount]=useState(0);
    const[sub,setsub]=useState(20);
    return(
        <div>
            <h1>{count}    {sub}</h1>
            
            <button onClick={()=>setCount(count+1)}>add button</button>
            <button onClick={()=>setsub(sub-1)}>sub button</button>
        </div>
    )
}

export default Cart