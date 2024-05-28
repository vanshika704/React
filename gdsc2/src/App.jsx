import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <h1 className="text-center text-4xl font-bold">TODO LIST</h1>
      <div>
        <nav className="navbar navbar-transparent"> 
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2" 
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-info" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;
