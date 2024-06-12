import AppBar from './appbar';
import "./index.css";
function MainPage() {
  return (
    <div>
      <AppBar />
      <div className='MainPagebody'>
       <Food1/>
      </div>
    </div>
  );
}

export default MainPage;
function Food1(){
  return(<img src="src/assets/food8.avif" alt="Logo" width={990} height={150} />)
}