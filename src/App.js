import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Header from './components/Header';
import CoinList from './components/CoinList';


class App extends Component {
  state = {
    coins: null
  };
  componentDidMount () {
    const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=20';
    fetch (url).then (response => response.json ()).then (coins => {
      this.setState ({
        coins: coins,
      });
    });
    console.log ('Component did mount log');
  }
  render () {
    return (
      <div className="App">
        <Header />
        <Search />
        <CoinList coins={this.state.coins}/>
      </div>
    );
  }
}

export default App;
