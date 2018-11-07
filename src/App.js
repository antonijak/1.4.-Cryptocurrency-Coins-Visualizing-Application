import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Header from './components/Header';
import CoinList from './components/CoinList';


class App extends Component {
  state = {
    coins: null,
    userInput: '',
    coinsToDisplay: this.coins,
    sortBy: 'name'
  };
  setPriceClassName = (percentage) => { return percentage < 0 ? "coin-spec red" : "coin-spec" }
  setSortingBy = (value) => {
    console.log('clicked');
    
    this.setState({
      sortBy: value
    })
    if (this.state.sortBy === 'name'){
      let result = this.state.coins.sort((a, b) => a.name.localeCompare(b.name));
      this.setState({ coinsToDisplay: result })
    } else if (this.state.sortBy === 'rank'){
      let result = this.state.coins.sort((a, b) => a.rank - b.rank);
      this.setState({ coinsToDisplay: result })
    } else if (this.state.sortBy === 'price'){
      let result = this.state.coins.sort((a, b) => parseFloat(b.price_usd) - parseFloat(a.price_usd));
      this.setState({ coinsToDisplay: result })
    }
  }
  updateInputValue = (e) => {
    if (this.state.coins !== null && e.target.value && e.target.value !== ' ') {
      let result = this.state.coins.filter((coin) => {
        if (coin.name) {
          let upperCaseCoin = coin.name.toString().toUpperCase();
          let userUpper = e.target.value.toUpperCase();
          let match = upperCaseCoin.startsWith(userUpper)
         
          if (match) { 
            return coin
          } 
        } 
      });
        this.setState({ coinsToDisplay: result })
    } else {
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
