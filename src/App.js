
import Header from "./MyComponents/Header"
import {Footer} from "./MyComponents/Footer"
import {Todos} from "./MyComponents/Todos"
import './App.css';
import {useState} from 'react';
import {AddTodo} from "./MyComponents/AddTodo"
function App() {
  const onDelete = (todo)=>{
    console.log("i am on delete",todo)

    setTodos(todos.filter((e)=>{
        return e!==todo;
    }));
  }

  const addTodo = (title,desc)=>{
console.log(title,desc)
  }
  const [todos,setTodos] = useState([
    {
      sn:1,
      title:"Go to school",
      desc:"Please go to school and do this work"
    },
    {
      sn:2,
      title:"Go to mall",
      desc:"Please go to mall and do this work"
    },
    {
      sn:3,
      title:"Go to office",
      desc:"Please go to office and do this work"
    },
    {
      sn:4,
      title:"Go to mall",
      desc:"Please go to mall and do this work"
    },
  ] )
  return (
    <> 
    <Header title ="MyTodoList"  searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  
  );
}

export default App;
