
import Header from "./MyComponents/Header"
import {Footer} from "./MyComponents/Footer"
import {Todos} from "./MyComponents/Todos"
import './App.css';
import {useState} from 'react';
import {AddTodo} from "./MyComponents/AddTodo"
import { useEffect } from "react";
function App() {


  //Initialize user data from local storage
  
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo =[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

    //onDelete function use to DeleteUser

  const onDelete = (todo)=>{
    console.log("i am on delete",todo)

    setTodos(todos.filter((e)=>{
        return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
 
   // addTodo use save User

  const addTodo = (name,city,role,que1,que2,que3)=>{
    let id;
    if(todos.length==0){
      id = 1;
    }
     else{
     id= todos[todos.length-1].id + 1;
     }
      const myTodo ={
        id:id,
        name:name,
        city:city,
        role:role,
        que1:que1,
        que2:que2,
        que3:que3
      }
      setTodos([...todos,myTodo])
      console.log(myTodo)
  }
     
  //useState to update users array

  const [todos,setTodos] = useState(initTodo)


  //when todos update this useEffect will run

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])


  return (
    <> 
    <Header title ="Survey-Form"  searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  
  );
}

export default App;
