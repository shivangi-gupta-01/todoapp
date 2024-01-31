import React, { useState } from 'react'
import {async} from '@firebase/util';
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../firebaseConfig'

const InputTodo = () => {
  const [title, setTitle] =useState("")
  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(title!=""){
      await addDoc(collection(db, "todo"),{
        title,
        completed: false

      })
      setTitle("")
    }

  }
  return (
    <form onSubmit={handleSubmit} className='flex justify-center items-center gap-10'>
      <input className='border-solid border-2 border-orange-900 m-4 p-2 text-center text-amber-900 rounded' type={'text'} placeholder='Enter Todo task' value={title}
      onChange={(e)=>setTitle(e.target.value)}/>
      <button className=' text-2xl p-2 text-white bg-amber-900 text-center rounded'> Add Task</button>
    </form>
  )
}

export default InputTodo