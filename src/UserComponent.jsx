import { useEffect } from "react";
const Counter = ({count, data})=>{
    useEffect(()=>{
        console.log("Mount");
    },[count])
    useEffect(()=>{
        return()=>{
            console.log("unmount phase");
        }
    },[])
    return(
        <div>
            <h1>Counter Value {count}</h1>
            <h1>Data Value {data}</h1>
        </div>
    )
}
export default Counter;