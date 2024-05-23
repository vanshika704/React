import 'bootstrap/dist/css/bootstrap.min.css'
function App(){
  return(
    <><center className="todo-container"><h1>Todo App</h1>
    <div className="container text-center">
  
  <div className="row">
    <div className="col-6"><input type="text" placeholder='Enter todo' /></div>
    <div className="col-4"><input type="date" /></div>
    <div className="col-2"><button type="button" className="btn btn-success">Add</button></div>
  </div>
  <div className="row">
    <div className="col-6">Buy Milk</div>
    <div className="col-4">4/10/2023</div>
    <div className="col-2"><button type="button" className="btn btn-danger">Remove</button></div>
  </div>
  <div className="row">
    <div className="col-6">Go to college</div>
    <div className="col-4">4/10/2023</div>
    <div className="col-2"><button type="button" className="btn btn-success">Add</button></div>
  </div>
</div></center></>
  )
}
export default App;