import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import todoImage from './assets/todo.jpg';
import download from './assets/download.jpeg';
function App() {
  return (
    <div className="card-container">
      <Enterycard />
      <Card2 />
    </div>
  );
}

export default App;

function Enterycard() {
  return (
    <div className="card" style={{ width: '30rem', margin: '10px' ,height:'40rem'}}>
      <img src={todoImage} className="card-img-top" alt="Todo" />
      <div className="card-body">
        <h5 className="card-title">TO-DO Items</h5>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p className="card-text" style={{ marginRight: '10px' }}>Enter Here</p>
          <input type='text' className="form-control" style={{ flex: '1' }} />
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><input type='date' /></li>
        <li className="list-group-item"><input type='time' /></li>
        <li className="list-group-item"><input type="text" placeholder='enter specific details' /></li>
      </ul>
    
    </div>
  );
}

function Card2() {
  return (
    <div className="card" style={{ width: '30rem', margin: '10px',height:'40rem' }}>
      <img src={download} className="card-img-top" alt="Todo" />
      <div className="card-body">
        <h5 className="card-title">TO-DO Items</h5>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p className="card-text" style={{ marginRight: '10px' }}>Your chores..</p>
          
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Clean the dishes</li>
        <li className="list-group-item">Go to market</li>
        <li className="list-group-item">Bills</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">View all</a>
        
      </div>
    </div>
  );
}
