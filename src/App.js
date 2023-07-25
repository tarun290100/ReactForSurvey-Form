import logo from './logo.svg';
import Header from "./MyComponents/Header"
import {Footer} from "./MyComponents/Footer"
import {Todos} from "./MyComponents/Todos"
import './App.css';

function App() {
  return (
    <> 
    <Header title ="MyTodoList"  searchBar={false}/>
    <Todos/>
    <Footer/>

    </>
  
  );
}

export default App;
