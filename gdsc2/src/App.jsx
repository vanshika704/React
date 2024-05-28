// App.js


import ThemeToggle from './darkmode.jsx';
import SearchBar from './searchbar.jsx';

function App() {
  const handleSearch = (searchTerm) => {
    // Perform search logic here
    console.log('Search term:', searchTerm);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1>TODO LIST</h1>
        <div className="d-flex">
          <ThemeToggle />
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
}

export default App;
