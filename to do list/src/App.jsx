import './App.css';
import './index.css';

function App() {
  return (
    <>
      <h1 className="top-center">TODO APP</h1>
      <EnterTodo />
    </>
  );
}

export default App;

function EnterTodo() {
  return (
    <input className="input-button" type="text" placeholder="Enter To Do Here" />
  );
}
