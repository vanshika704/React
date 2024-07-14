// MyComponent.js
import  { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('myData');
    return savedData ? JSON.parse(savedData) : '';
  });

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(data));
  }, [data]);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      <input type="text" value={data} onChange={handleChange} />
    </div>
  );
};

export default MyComponent;
