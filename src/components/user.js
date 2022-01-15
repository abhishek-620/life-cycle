import React,{useState, useEffect} from "react";
const User= (props )=>{
  const [planet,setPlanet]=useState("earth");
  //componentDidMount
  useEffect(()=>{
    console.log("component mounting");
  },[]);

  //componentDidUpdate
  useEffect(()=>{
    console.log("Planet changes");
  },[planet]);
  return(
    <div>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    <button onClick={()=> setPlanet("pluto")}>{planet}</button>
    </div>
  );
}

export default User;
//hook-> enable use of state in ur functional component- usestate,useEffect
//props -> properties/params, a data that is passed to one component to another
//life cycle method->
//mount-component is initially rendered in ur dom
//constructor,render,componentdidmount - side effects
//update - component is being updated
//unmount - component is removed from the dom
