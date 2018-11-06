import React from 'react';

const Coin = (props) => {
  const coins = props.coins != null? props.coins.map (coin => {
    return (
      <div>
        <h1> {coin.name}</h1>
      </div>
    );
  })
  : <div> <h1>Loading.....</h1></div>;
  return coins;
}

export default Coin;
