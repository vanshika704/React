import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
      <h1 className="top-center">TODO APP</h1>
      <EnterTodo />
    </>
  );
}

function EnterTodo() {
  const handleAddTodo = () => {
    const inputField = document.querySelector('.input-button');
    const todoText = inputField.value;
    console.log("Todo added:", todoText);

   
    inputField.value = "";

    
    const todoList = document.querySelector('.todo-list');
    const todoItem = document.createElement('div');
    todoItem.textContent = todoText;
    todoList.appendChild(todoItem);
  };

  return (
    <div className="input-container">
      <input 
        className="input-button" 
        type="text" 
        placeholder="Enter To Do Here" 
      />
      <button type="button" className="btn btn-dark" onClick={handleAddTodo}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <br></br>
      <div className="todo-list"></div>
    </div>
  );
}

export default App;
