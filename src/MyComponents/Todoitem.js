import React from 'react'
import { createContext,useContext } from "react";
import { UserContext } from '../App.js';



const Todoitem = ({todo}) => {
  const deleteli = useContext(UserContext);

  return (
    <>

    <div className="card col-lg-4" >
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{todo.title}</h5>
      <p className="card-text">{todo.desc}</p>
      <a href="#" className="btn btn-danger btn-sm" onClick={()=>deleteli(todo)}>Delete</a>
    </div>
  </div>
    </>
  )
}

export default Todoitem
