import React, { useEffect } from 'react';
import './FunctionComponent.css';
function FunctionComponent(props){

    const [counter,setState]=React.useState(0);

    //componentDidMount
    useEffect(()=>{
        console.log("Component Mounted!");
    }, []);
    // componentDidupdate
    useEffect(()=>{
        console.log("component updates!");
    },[counter]);
    // componentDidUnmount
    useEffect(()=>{
        return console.log("Component Did Unmount");
    },[]);
    return(
        <div>
                <h1 className="functionHeading"
                style={{backgroundColor: "red",fontSize:"3rem"}}
                >{counter}</h1>
                <p>{props.name}</p>
                <button onClick={()=>setState(counter+1)}> +1 </button> 
            </div>
    ); 
}
export default FunctionComponent;  