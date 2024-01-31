import logo from './logo.svg';
import './App.css';
import InputTodo from './components/InputTodo';
import { useEffect, useState } from 'react';
import { querySnapshot, collection, onSnapshot, query, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // const q = query(collection(db,"todo"))
    // const unsub = onSnapshot(q, (querySnapshot) => {
    //   // let todosArray=[]
    //   console.log(querySnapshot);
    //   querySnapshot.forEach((doc)=>{
    //       setTodos({...doc.data(),id:doc.id})
    //   })
    //   console.log(todos)
    //   return ()=>unsub()
    // console.log(todos)

    // })
    const todoRef = collection(db, 'todo');
    const fetchData = onSnapshot(todoRef, (snapshot) => {
      const todoList = [];
      snapshot.forEach((doc) => {
        todoList.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todoList);
    }, (error) => {
      console.error('Error fetching food data: ', error);
    });

    console.log("....", todos);
    return () => {
      fetchData();
    };
  }, [])
  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todo", todo.id), { title: title })
  }
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todo", todo.id), { completed: !todo.completed })
  }
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todo", id))
  }

  return (
    <div className="flex flex-col justify-center h-screen w-full ">
      <div className=' flex bg-amber-800 items-center p-2  justify-center h-1/6'>
        <h1 className=' text-white text-5xl font-semibold'>My todo List</h1>
      </div>
      <div className='flex flex-col items-center bg-amber-100 h-5/6'>
        <div className='p-4 '>
          <InputTodo />
        </div>
        {/* <div><TodoList/></div> */}
        <div className='w-4/6 justify-between flex flex-col h-1/4'>
          {/* { console.log(todos)} */}
          {todos.map((todo) => (
            // {console.log(todo)}
            <TodoList todo={todo} toggleComplete={toggleComplete} handleDelete={handleDelete} handleEdit={handleEdit} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
