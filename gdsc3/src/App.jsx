import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <h1>TODO LIST</h1>
        <div className="Row1">
          <div className="searchbar-container">
            <input className="searchbar" type="text" placeholder="Search Notes"></input>
            
          
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
ALL
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
