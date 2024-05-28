// SearchBar.js

import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          color='grey'
          value={searchTerm}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit"></button>
        </div>
      </div>
    </form>
  );
};


SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
