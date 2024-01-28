import logo from './logo.svg';
import './App.css';
import InputTodo from './components/InputTodo';



function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1>My todo List</h1>
      </div>
      <InputTodo/>
    </div>
  );
}

export default App;
