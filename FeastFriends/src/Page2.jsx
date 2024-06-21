import AppBar from './appbar';
import "./index.css";
import { FaSearch } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import Gallery from './backgroundcarousal';

function MainPage() {
  return (
    <div>
      <AppBar />
      <div className='MainPagebody'>
        <Food1 />
      </div>
      <Greycontainer />
      <Info />
    </div>
  );
}

export default MainPage;

function Food1() {
  return (
    <div className="image-container">
      {/* <img src="src/assets/food3.jpg" className='imagemain' alt="Food" /> */}
      <Gallery/>
      <div className="text-overlay">
        <h1>Life is Too Short For<br /> Boring food</h1>
        <h6>Eat Something Great Everyday In Your Budget</h6>
      </div>
    </div>
  );
}

function Greycontainer() {
  return (
    <div className="grey-container">
      <div>
        <FaSearch size={30} />
        <div className="spacer"></div>
        <div>Explore</div>
      </div>
      <div>
        <FaPeopleArrows size={30} />
        <div className="spacer"></div>
        <div>Partners</div>
      </div>
      <div>
        <MdRestaurantMenu size={30} />
        <div className="spacer"></div>
        <div>See Menu</div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className='info'>
      <div className='Leftdata'>
        <img src='src/assets/food8.avif' height={500} width={500} className='image2' alt="Food" />
      </div>
    </div>
  );
}
