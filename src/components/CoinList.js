import React from 'react';
import './CoinList.css'
import Coin from './Coin'

const CoinList = (props) => {
  return (
      <div>
        <div id="container">
          <div id="legend">
              <button className="legend-span">
                <span>NUMBER</span>
              </button>
              <button className="legend-span">
                <span>NAME</span>
              </button>
              <button className="legend-span">
                <span>PRICE</span>
              </button>
              <button className="legend-span">
                <span>RANK</span>
              </button>
              <button className="legend-span">
                <span>CHANGE</span>
              </button>
          </div>
        </div>
        <main>
          <Coin coins={props.coins}/>
        </main>
      </div>
  );
}

export default CoinList;
