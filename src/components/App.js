import React , {useState} from "react";
var count = 0;
function App() {
    const [text , setText] = useState("");
    const [itemsList , setItems] = useState([]);

    function valueText(event) { 
        setText(event.target.value);
    }
    function addToArray() { 
      if(text.length > 0){
        setItems([...itemsList , text]);
        setText("");
      }else{
        alert("You need to enter some todo items")
      }
      
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
            itemsList.map((x)=><li key={count++}>{x}</li>)
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
