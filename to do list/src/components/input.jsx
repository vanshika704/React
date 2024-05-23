function Input(){
    return(<><div className="container mt-4">
    <div className="row mb-3">
    <div className="col-6">
      <input type="text" className="form-control" placeholder="Enter todo" />
    </div>
    <div className="col-4">
      <input type="date" className="form-control" />
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-success">Add</button>
    </div>
  </div>
  </div></>)
}
export default Input;