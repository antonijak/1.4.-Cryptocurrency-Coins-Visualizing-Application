import React from "react";
import "./Coin.css";

const Coin = props => {
  const coins =
    props.coinsToDisplay != null ? (
      props.coinsToDisplay.map(coin => {
        return (
          <div className="coin" key={coin.id}>
            <span className="coin-spec name-coin">{coin.name}</span>
            <span className="coin-spec rank-coin">{coin.rank}</span>
            <span className="coin-spec price-coin">
              {parseFloat(coin.price_usd).toFixed(2)}
            </span>
            <span className={props.setClass(coin.percent_change_24h)}>
              {coin.percent_change_24h}
            </span>
            <span className="coin-spec amount-coin">{coin.total_supply}</span>
          </div>
        );
      })
    ) : (
      <div>
        <span className="coin-spec">
          Loading... (make sure your Ad block is disabled)
        </span>
      </div>
    );
  return coins;
};

export default Coin;
