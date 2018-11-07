import React from 'react';
import './Coin.css'

const Coin = (props) => {
  const coins = props.coinsToDisplay != null
    ? props.coinsToDisplay.map (coin => {
        return (
          <div className="coin">
            <span className="coin-spec name">{coin.name}</span>
            <span className="coin-spec rank">{coin.rank}</span>
            <span className="coin-spec">{parseFloat(coin.price_usd).toFixed(2)}</span>
            <span className={props.setClass(coin.percent_change_24h)}>{coin.percent_change_24h}</span>
            <span className="coin-spec">{coin.total_supply}</span>
          </div>
        );
      })
    : <div> 
        <span className="coin-spec">Loading...</span>
      </div>;
  return coins;
}

export default Coin;
