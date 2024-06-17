
import '../index.css'; 

import Appbar from './Appbar';
import Resources from './resources';

function Home() {
  return (<>
    <div className="Home">
      <Appbar />
      <div className='imageandtext'>
        <div className="mainpagetext">
          <div>
            If you want <br />
            to grow,<br />
            just grow <br />
            Exponentially<br />
          </div>
          <button className="Startnow">Start Now --&gt;</button>
        </div>
        
        <div className="image-stack">
          <img className='image2' src="src/assets/Card 1.png" alt="First Image" height={500} width={500} />
          <img className='image1' src="src/assets/Card 2.png" alt="Second Image" height={500} width={500} />
        </div>
      </div>
     
    </div>
    <Resources/>
    </>
  );
}

export default Home;

