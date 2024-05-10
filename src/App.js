import './App.css';
import Header from './MyComponents/header.js';
import Todos from './MyComponents/Todos.js';
import Addtodo from './MyComponents/Addtodo.js';
import Footer from './MyComponents/Footer.js';
import { useState,useEffect, useRef, createContext  } from 'react';

export const UserContext = createContext();

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];  
  }else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const [todos,settodos]=useState(initTodo);
  const count = useRef(0);

  const ondelete=(todo)=>{
    //console.log("I am on delete of todo",todo);
    //console.log(todos);
    //let index=todos.indexOf(todo);
    //todos.splice(index,1)
    //console.log(index);
    settodos(todos.filter((e)=>{
      console.log(e);
      console.log(todo);
      return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos));


  }
  const createtodo=(title,desc)=>{
    console.log('title',desc);
    let sno;
    if(todos.length===0){
      sno=0
    }else{
      sno=todos[todos.length-1].sno+1;
    }
    const mytodo={
      sno:sno,
      title:title,
      desc:desc
    }
    settodos([...todos,mytodo])
    localStorage.setItem("todos",JSON.stringify(todos));

  }
  // const [todos,settodos]=useState([
  //   {
  //       sno:1,
  //       title:"Go to the market",
  //       desc:"You need to go to the market to get this job done"
  //   },
  //   {
  //       sno:2,
  //       title:"Go to the mall",
  //       desc:"You need to go to the mall to get this job done"
  //   },
  //   {
  //       sno:3,
  //       title:"Go to the shop",
  //       desc:"You need to go to the shop to get this job done"
  //   }
  // ])
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  return (
    <>
  <Header title="My Todos list" searchbar={false}/>
  <Addtodo createtodo={createtodo} count={count}/>
  <UserContext.Provider value={ondelete}>
    <Todos todos={todos}/>
  </UserContext.Provider>

  <Footer/>
    </>

  );
}

export default App;
