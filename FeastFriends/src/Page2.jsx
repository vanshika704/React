import  { useEffect, useState } from 'react';
import axios from 'axios';
import AppBar from "./appbar";
import './index.css'; 

function Page2() {
  return (
    <div>
      <AppBar />
      <div className="container">
        <FoodGallery />
        <MainPageItems />
      </div>
    </div>
  );
}

export default Page2;

const FoodGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
            query: 'food',
            count: 10, // Adjusted for faster loading
            client_id: '-SXu-p1sLlhOb9e6jqiKCfP46WmqjCl3DeGLt_L2-tw'
          }
        });
        setPhotos(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching photos: {error.message}</p>;

  return (
    <div className="food-gallery">
      {photos.map(photo => (
        <div key={photo.id} className="photo">
          <img src={photo.urls.small} alt={photo.alt_description} />
        </div>
      ))}
    </div>
  );
};

function MainPageItems() {
  return (
    <div className="MainPageItems">
      <h2>Main Page Items</h2>
      <p>This is where the main page items will go.</p>
    </div>
  );
}
