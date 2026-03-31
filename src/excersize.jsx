//--------------state --------
//state is a container used to store data . 
// It is mutable and dynamic 
// it must be imported to use it.
// it re-render component automatically so that data can be seen in UI
// syntax- import { useState } from "react";
// ------------hooks-------------
// hooks are special feature for functional component 
// hooks let you use diff. react features  like state, life cyle methods
//---------------Props----------
/*these are used to pass data from one component to another
syntax------
<Login name="Vanshika" age={29}></Login>
function Login({name, age}) {
  return (
    <div>
      <h1>Login User</h1>
      <h1 style={{color:"red"}}>{name}</h1>
      <h1>Age: {age}</h1>
    </div>
  );
}*/
/*
-------control Components-------
It is a form whose input field value is controlled by React's state
store input field value in state
use change handler with input feild
value attribute attached with state


*/
/*----useEffect
uses to remove side effect inside the component
use to ftech data
useEffect((pass fun as parameter, dependency)=>{
  //write code
  },[state or prop])


*/