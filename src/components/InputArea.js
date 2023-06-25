import React , {useState} from "react";

function InputArea(props){
    const [text , setText] = useState("");
    function valueText(event) { 
        setText(event.target.value);
    }

    return<div className="form">
    <input name="todo" onChange={valueText} type="text" value={text}/>
    <button onClick={()=>{
        props.addClick(text);
        setText("");
    }}>
      <span>Add</span>
    </button>
  </div>;
}

export default InputArea;