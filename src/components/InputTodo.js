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
        coompleted: false

      })
      setTitle("")
    }

  }
  return (
    <form onSubmit={handleSubmit}>
      <input type={'text'} placeholder='Enter Todo task' value={'title'}
      onChange={(e)=>setTitle(e.target.value)}/>
      <button>+</button>
    </form>
  )
}

export default InputTodo