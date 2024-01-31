import React, { useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const TodoList = ({todo,toggleComplete, handleDelete, handleEdit}) => {
    const [newTitle, setNewtitle] =useState(todo.title);
    const handleChange=(e)=>{
        e.preventDefault()
        if(todo.completed=== true){
            setNewtitle(todo.title)
        }
        else{
            todo.title=""
            setNewtitle(e.target.value)
        }
    }
  return (
    <div className='flex  p-3 bg-amber-700 rounded w-50 gap-4 m-2 justify-between h-3/6'>
        {/* <h1>hhhhh</h1> */}
        <input style={{textDecoration: todo.completed && "line-through"}} className=' rounded text-center font-semibold w-5/6 h- ' type='text' value={todo.title===""?newTitle: todo.title} onChange={handleChange}/>
        <div className='flex flex-row gap-3'>
            <button onClick={()=>toggleComplete(todo)}><CheckCircleIcon id="i"/></button>
            <button onClick={()=>handleEdit(todo, newTitle)}><EditIcon id="i"/></button>
            <button onClick={()=>handleDelete(todo.id)}><DeleteIcon id="i"/></button>
        </div>
    </div>
  )
}

export default TodoList