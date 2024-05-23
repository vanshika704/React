function Text(){
    return(<><div className="todo-container text-center">
     <div className="row mb-2">
          <div className="col-6">Buy Milk</div>
          <div className="col-4">4/10/2023</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">Remove</button>
          </div>
        </div>
        <div className="row">
          <div className="col-6">Go to college</div>
          <div className="col-4">4/10/2023</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">Remove</button>
          </div>
        </div>
        </div></>)
}
export default Text;