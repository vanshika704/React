
import AppBar from './appbar';
import "./index.css";
import { FaRegClock } from "react-icons/fa";
import { MdDinnerDining } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
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
          <div><FaRegClock size={30}/></div><div className="spacer"></div>
          <div>Work Hours</div>
        </div>
        <div>
          <div><MdDinnerDining size={30}/></div><div className="spacer"></div>
          <div>Book Table</div>
        </div>
        <div>
          <div><MdRestaurantMenu size={30} /></div><div className="spacer"></div>
       <div>See Menu</div>
        </div>
      </div>
    </div>
  );
}


function Info() {
  return (<div className='info'>hello</div>)
}
