import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Header from './components/Header';
import CoinList from './components/CoinList';


class App extends Component {
  state = {
    coins: null,
    userInput: null,
    coinsToDisplay: this.coins,
    sortBy: 'name'
  };
  setPriceClassName = (percentage) => { return percentage < 0 ? "coin-spec red" : "coin-spec" }
  setSortingBy = (value) => {
    if (value === 'name') {
      this.setState ({ 
        coinsToDisplay: this.state.coinsToDisplay.sort((a, b) => a.name.localeCompare(b.name)),
        sortBy: value 
      });

    } else if (value === 'rank') {
      this.setState ({ 
        coinsToDisplay: this.state.coinsToDisplay.sort((a, b) => a.rank - b.rank), 
        sortBy: value
      });

    } else if (value === 'price') {
      this.setState ({ 
        coinsToDisplay: this.state.coinsToDisplay.sort((a, b) => parseFloat(b.price_usd) - parseFloat(a.price_usd)), 
        sortBy: value 
      });

    }
  }
  updateInputValue = (e) => {
    this.setState({userInput: e.target.value});
    
    if (this.state.coins !== null && e.target.value !== null) {
      let result = this.state.coins.filter(coin => {
        let item;
        if (coin.name !== null) {
          let upperCaseCoin = coin.name.toString().toUpperCase();
          let userUpper = e.target.value.toUpperCase();
          
          if (upperCaseCoin.startsWith(userUpper)) { 
            item = coin
          } 
        } 
        return item
      });

      this.setState({ coinsToDisplay: result })
      
    } else if (this.state.coins !== null) {
      this.setState({ coinsToDisplay: this.state.coins })
    }
  }
  componentDidMount () {
    const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=200';
    fetch (url)
    .then (response => response.json ())
    .then (coins => {
      this.setState ({
        coins: coins,
        coinsToDisplay: coins
      });
    });
    console.log ('Component did mount log');
  }
  render () {
    return (
      <div className="App">
        <Header />
        <Search updateInputValue={this.updateInputValue}/>
        <CoinList coinsToDisplay={this.state.coinsToDisplay} setClass={this.setPriceClassName} setSortingBy={this.setSortingBy}/>
      </div>
    );
  }
}

export default App;
