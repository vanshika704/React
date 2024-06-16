
import TabBar from './components/Appbar'; 
import Footer from './components/footer';

function Home() {
  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <TabBar />
      <div className="content flex-grow-1">
        <div className="container mt-3">
          <div>
            <h1>Welcome to our website</h1>
            <p>This is the placeholder content for the home page.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
