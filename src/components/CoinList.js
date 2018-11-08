import React from 'react';
import Coin from './Coin';
import './CoinList.css';
import SortingIcon from './SortingIcon';

const CoinList = (props) => {
  return (
      <div>
        <div id="container">
          <div id="legend">

              <button className="legend-button name" onClick={()=> props.setSortingBy('name')}>
                <div className="legend-title">
                  <span id="name">Name</span>
                  <SortingIcon 
                    sortAscending={props.sortAscendingName}
                    theClassName={props.nameClassName}
                  />
                </div>
              </button>

              <button className="legend-button rank" onClick={()=> props.setSortingBy('rank')}>
                <div className="legend-title">
                  <SortingIcon 
                    sortAscending={props.sortAscendingRank}
                    theClassName={props.rankClassName}
                  />
                  <span>Rank</span>
                </div>
              </button>

              <button className="legend-button price" onClick={()=> props.setSortingBy('price')}>
                <div className="legend-title">
                  <SortingIcon 
                    sortAscending={props.sortAscendingPrice}
                    theClassName={props.priceClassName}
                  />
                  <span>Price</span>
                </div>
              </button>

              <button className="legend-button change">
                <div className="legend-title">Change(%)</div>
              </button>

              <button className="legend-button amount">
                <div className="legend-title">Amount</div>
              </button>

          </div>
        </div>
        <main>
          <Coin 
            coinsToDisplay={props.coinsToDisplay} 
            setClass={props.setClass}
          />
        </main>
      </div>
  );
}

export default CoinList;
