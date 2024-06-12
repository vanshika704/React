import AppBar from './appbar';
import "./index.css";

function MainPage() {
  return (
    <div>
      <AppBar />
      <div className='MainPagebody'>
        <Food1 />
        
      </div><Info/>
    </div>
  );
}

export default MainPage;

function Food1() {
  return (
    <div className="image-container">
      <img src="src/assets/food3.jpg" className='imagemain' alt="Food" />
      <div className="grey-container">
        <p>This is a grey container</p>
      </div>
    </div>
  );
}

function Info(){
  return(<div className='info'>hello</div>)
}