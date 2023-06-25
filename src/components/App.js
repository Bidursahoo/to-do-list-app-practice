import React , {useState} from "react";
import ToDoItems from "./ToDoListItems";
import InputArea from "./InputArea";


var count = 0;
function App() {
    
    const [itemsList , setItems] = useState([]);
    // const[ lineTrough , setLineThrough] = useState("");
    
    
    
    

    function addToArray(text) { 
      if(text.length > 0){
        setItems([...itemsList , text]);
        
      }else{
        alert("You need to enter some todo items")
      }      
    }


    function deleteItems(id){
      // console.log(id)
      // setItems(itemsList.slice(id))
      setItems(
        itemsList.filter((item,index) =>{
          return index !==id
        })
      )
    }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addClick={addToArray}/>
      <div>
      <ul>
        {
            itemsList.map( (x , index)=>
            <ToDoItems key={index+2} 
            counts={count} x={x} id={index}
            onChecked={deleteItems}  
            /> )
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
