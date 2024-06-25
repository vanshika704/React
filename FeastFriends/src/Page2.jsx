import AppBar from './appbar';
import "./index.css";
import { FaSearch } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import Gallery from './backgroundcarousal';
import { Grid, GridItem } from '@chakra-ui/react'
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
     
      <Grid
  h='500px'
    w="100%"
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1} bg='tomato'></GridItem>
  <GridItem colSpan={2} bg='papayawhip' ></GridItem>
  <GridItem colSpan={2} bg='papayawhip'></GridItem>
  <GridItem colSpan={4} bg='tomato' ></GridItem>
</Grid>
    </div>
  );
}
