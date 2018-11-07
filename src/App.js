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
    sortBy: 'name',
    sortDescendingName: false,
    sortDescendingRank: true,
    sortDescendingPrice: false
  };
  setPriceClassName = (percentage) => { return percentage < 0 ? "coin-spec red" : "coin-spec" }
  setSortingBy = (value ) => {
    if (value === 'name' && this.state.sortDescendingName === true) {
      this.setState ({ 
        coinsToDisplay: this.state.coinsToDisplay.sort((a, b) => b.name.localeCompare(a.name)),
        sortBy: value,
        sortDescendingName: false
      });

    } else if (value === 'name' && this.state.sortDescendingName === false) {
      this.setState ({ 
        coinsToDisplay: this.state.coinsToDisplay.sort((a, b) => a.name.localeCompare(b.name)),
        sortBy: value,
        sortDescendingName: true
      });

    } else if (value === 'rank' && this.state.sortDescendingRank === true) {
      this.setState ({ 
        coinsToDisplay: this.state.coinsToDisplay.sort((a, b) => b.rank - a.rank), 
        sortBy: value,
        sortDescendingRank: false
      });

    } else if (value === 'rank' && this.state.sortDescendingRank === false) {
      this.setState ({ 
        coinsToDisplay: this.state.coinsToDisplay.sort((a, b) => a.rank - b.rank), 
        sortBy: value,
        sortDescendingRank: true
      });

    } else if (value === 'price' && this.state.sortDescendingPrice === true) {
      this.setState ({ 
        coinsToDisplay: this.state.coinsToDisplay.sort((a, b) => parseFloat(b.price_usd) - parseFloat(a.price_usd)), 
        sortBy: value ,
        sortDescendingPrice: false 
      });

    } else if (value === 'price' && this.state.sortDescendingPrice === false) {
      this.setState ({ 
        coinsToDisplay: this.state.coinsToDisplay.sort((a, b) => parseFloat(a.price_usd) - parseFloat(b.price_usd)), 
        sortBy: value ,
        sortDescendingPrice: true
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
        <CoinList 
          coinsToDisplay={this.state.coinsToDisplay} 
          setClass={this.setPriceClassName} 
          setSortingBy={this.setSortingBy} 
          sortDescendingName={this.state.sortDescendingName}
          sortDescendingRank={this.state.sortDescendingRank}
          sortDescendingPrice={this.state.sortDescendingPrice}
        />
      </div>
    );
  }
}

export default App;
