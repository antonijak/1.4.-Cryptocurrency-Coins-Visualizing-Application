import React from 'react';
import './CoinList.css'
import Coin from './Coin'

const CoinList = (props) => {
  return (
      <div>
        <div id="container">
          <div id="legend">
              <button className="legend-span name" onClick={()=> props.setSortingBy('name')}>
                <span>Name</span>
              </button>
              <button className="legend-span rank" onClick={()=> props.setSortingBy('rank')}>
                <span>Rank</span>
              </button>
              <button className="legend-span" onClick={()=> props.setSortingBy('price')}>
                <span>Price</span>
              </button>
              <button className="legend-span">
                <span>Change(%)</span>
              </button>
              <button className="legend-span">
                <span>Number</span>
              </button>
          </div>
        </div>
        <main>
          <Coin coinsToDisplay={props.coinsToDisplay} setClass={props.setClass}/>
        </main>
      </div>
  );
}

export default CoinList;
