import React from 'react';
import './Search.css';
import MagnifyIcon from './MagnifyIcon'


const Search = () => {
  return (
    <div className="input-container">
      <MagnifyIcon />
      <input type="text" placeholder="search coins" id="search"></input>
    </div>
  );
}

export default Search;
