import AppBar from './appbar';
import "./index.css";

function MainPage() {
  return (
    <div>
      <AppBar />
      <div className='MainPagebody'>
        <Food1 />
        
      </div><Info />
    </div>
  );
}

export default MainPage;



function Food1() {
  return (
    <div className="image-container">
      <img src="src/assets/food3.jpg" className='imagemain' alt="Food" />
      <div className="text-overlay">
        <h1>Life is Too Short For<br/> Boring food</h1> 
        <h6 >Eat Something Great Everyday In Your Budget</h6>
      </div> 
      <div className="grey-container">
        <div>
          <p>This is the first part</p>
        </div>
        <div>
          <p>This is the second part</p>
        </div>
        <div>
          <p>This is the third part</p>
        </div>
      </div>
    </div>
  );
}


function Info() {
  return (<div className='info'>hello</div>)
}
