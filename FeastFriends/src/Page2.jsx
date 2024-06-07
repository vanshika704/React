import AppBar from "./appbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
function Page2() {
  return (
    <div>
      <AppBar/>
      <FoodGallery/>
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
            count: 170,
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
          <p></p>
        </div>
      ))}
    </div>
  );
};

