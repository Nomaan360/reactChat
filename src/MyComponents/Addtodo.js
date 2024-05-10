import React, { PureComponent } from "react";
import { useState, useEffect, useRef } from 'react';

export const Addtodo =({createtodo,count})=>{
    const [title, setTitle] = useState("");

    const [desc, setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        else{
            createtodo(title,desc)
            setTitle("")
            setDesc("")
        }
    }
    useEffect(() => {
      count.current = count.current + 1;
    });
  
    return (
      <>
                    <h1>Render Count: {count.current}</h1>

      <div className="container my-3">
        <h1>Add a Todo</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Text
            </label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Descr
            </label>
            <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" />
          </div>

          <button type="submit" onClick={submit} className="btn btn-success btn-sm">
            Add Todo
          </button>
        </form>
      </div>
      </>

    );
  
}

export default Addtodo;