import React from 'react';
import './Search.css';
import MagnifyIcon from './MagnifyIcon'

const Search = (props) => {
  return (
    <div className="input-container">
      <MagnifyIcon />
      <input type="text" placeholder="search coins" id="search" onInput={(e) => props.getUserInput(e)}>
      </input>
    </div>
  );
}

export default Search;
