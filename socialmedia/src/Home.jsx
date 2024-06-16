import TabBar from './components/Appbar'; 
import Footer from './components/footer';

function Home() {
  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <TabBar />
      <div className="content flex-grow-1">
        <div className="container mt-3">
          <div className='bodyhome'>
            {/* Your content here */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
