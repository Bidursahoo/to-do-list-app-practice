import React , {useState} from "react";

function App() {
    const [text , setText] = useState("");
    function value(event) { 
        setText(event.target.value);
        console.log(text);
     }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input name="todo" onChange={value} type="text" value={text}/>
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
