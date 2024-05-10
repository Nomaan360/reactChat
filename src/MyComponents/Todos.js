import React from 'react'
import Todoitem from './Todoitem';

const Todos = (props) => {
  return (
    <div className='container row mx-auto'>

       <h3 className='text-center'>Todos List</h3>
        <h1>{props.todos.length}</h1>
       {props.todos.length===0? "No Todos to display":
        props.todos.map((todo)=>{
            return (
                <Todoitem todo={todo} key={todo.sno}/>
            )
            
        })
        }

    </div>
  )
}

export default Todos
