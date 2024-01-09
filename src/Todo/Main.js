import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteTask, editTask } from './formSlice';
import {toast} from "react-hot-toast";
const ToDoList = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.todo)
  const [addata, setAddData] = useState("");
  const [edit, setEdit] = useState(null);
  const submit = () => {
    if (!addata) {
      toast.error("please add task")
    } else {
      dispatch(addData(addata));
       setAddData("")
    }
  }
  const editbtn=()=>{
    if (edit !== null) {
      dispatch(editTask({ id: edit, text: addata }));
      setEdit(null);
    }
  }
  const handleedit = (id, text) => {
    setAddData(text)
    setEdit(id)
  }
  const handledelet = (id) => {
    dispatch(deleteTask(id))
    console.log(id);
  }

  return (
    <div  className="todo-container" >
      <div >
        <div className='d-flex' style={{ width: "100%",height:"70%" ,backgroundColor: "grey", justifyContent: "center", alignItems:"center",padding:"20px",marginTop:"100px",border:"2px solid black",boxShadow:"10px 10px 5px lightblue" }}>
          <div>
            <div>
              <h1 style={{ fontSize: "3rem", fontFamily: "sans-serif",textAlign:"center" }}>TaskHub</h1>
              <h3 style={{fontSize:"2rem",fontFamily:"sans-serif",textAlign:"center"}}> Simplify Your Day</h3>
              
            </div>
            
           
  

            <input onChange={(e) => { setAddData(e.target.value) }} className='input p-4 mb-4 w-75' value={addata} style={{ height: "2.5rem", borderRadius: "5px", borderColor: "white" }} placeholder='What Is The Task Today?' type="text" />
            {edit===null?(<button
  onClick={submit}
  className='mx-3'
  style={{
    backgroundColor: "green",
    height: "3rem",
    borderRadius: "40%",
    color: "white",
    fontWeight: "bold",
    border: "none",
    padding: "0 20px",
     cursor: "pointer",
    transition: "background-color 0.3s",
  }}
>
  Add Task
</button>
):(<button onClick={editbtn} className='mx-3' style={{ backgroundColor: "green", height: "3rem",
borderRadius: "40%",
color: "white",
fontWeight: "bold",
border: "none",
padding: "0 20px",
cursor: "pointer",
transition: "background-color 0.3s",
}}>Edit Task</button>)}
            <div style={{ textAlign: "center" }}>
              {data.map((item, index) => (
                <div key={item.id} className='mt-4 mb-2 p-2' style={{ backgroundColor: "white", borderRadius: "5px", justifyContent: "space-around", display: "flex", alignItems: "center" }}>
                  <h1>{item.text}</h1>
                  <div>
                     <FaEdit className='mx-4' onClick={() => handleedit(item.id, item.text)} />
                     <MdDelete onClick={() => { handledelet(item.id) }} />
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ToDoList
