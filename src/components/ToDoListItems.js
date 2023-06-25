import React  from "react";

function ToDoItems(props) {  
    return <li key={props.key} 
    onClick={()=>{
        props.onChecked(props.id)
    }} 
    >
    {props.x}</li>
    // return <li key={props.key} 
    // onClick={()=>{
    //     props.onChecked(props.id)
    // }} 
    // style={{textDecoration:props.line}}>
    // {props.x}</li>
}

export default ToDoItems;