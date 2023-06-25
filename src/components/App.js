import React , {useState} from "react";
function App() {
    const [text , setText] = useState("");
    const [itemsList , setItems] = useState([]);

    function valueText(event) { 
        setText(event.target.value);
    }
    function addToArray() { 
      setItems([...itemsList , text]);
    }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input name="todo" onChange={valueText} type="text" value={text}/>
        <button onClick={addToArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
      <ul>
        {
            itemsList.map((x)=><li>{x}</li>)
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
