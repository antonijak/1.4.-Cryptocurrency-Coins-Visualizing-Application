import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import Header from "./components/Header";
import CoinList from "./components/CoinList";

class App extends Component {
  state = {
    coins: null,
    userInput: null,
    coinsToDisplay: this.coins,
    sortBy: "name",
    sortAscendingName: false,
    sortAscendingRank: true,
    sortAscendingPrice: false,
    nameClassName: "arrow-icon",
    rankClassName: "arrow-icon",
    priceClassName: "arrow-icon"
  };
  //sets the color of the price (green or red)
  setPriceClassName = percentage => {
    return percentage < 0
      ? "coin-spec change-coin red"
      : "coin-spec change-coin green";
  };
  //when clicking on column header coins get sorted by the value of header in ascending or descending order
  setSortingBy = value => {
    if (value === "name" && this.state.sortAscendingName === true) {
      this.setState({
        coinsToDisplay: this.state.coinsToDisplay.sort((a, b) =>
          b.name.localeCompare(a.name)
        ),
        sortBy: value,
        sortAscendingName: false,
        nameClassName: "visible",
        rankClassName: "arrow-icon",
        priceClassName: "arrow-icon"
      });
    } else if (value === "name" && this.state.sortAscendingName === false) {
      this.setState({
        coinsToDisplay: this.state.coinsToDisplay.sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
        sortBy: value,
        sortAscendingName: true,
        nameClassName: "visible",
        rankClassName: "arrow-icon",
        priceClassName: "arrow-icon"
      });
    } else if (value === "rank" && this.state.sortAscendingRank === true) {
      this.setState({
        coinsToDisplay: this.state.coinsToDisplay.sort(
          (a, b) => b.rank - a.rank
        ),
        sortBy: value,
        sortAscendingRank: false,
        nameClassName: "arrow-icon",
        rankClassName: "visible",
        priceClassName: "arrow-icon"
      });
    } else if (value === "rank" && this.state.sortAscendingRank === false) {
      this.setState({
        coinsToDisplay: this.state.coinsToDisplay.sort(
          (a, b) => a.rank - b.rank
        ),
        sortBy: value,
        sortAscendingRank: true,
        nameClassName: "arrow-icon",
        rankClassName: "visible",
        priceClassName: "arrow-icon"
      });
    } else if (value === "price" && this.state.sortAscendingPrice === true) {
      this.setState({
        coinsToDisplay: this.state.coinsToDisplay.sort(
          (a, b) => parseFloat(b.price_usd) - parseFloat(a.price_usd)
        ),
        sortBy: value,
        sortAscendingPrice: false,
        nameClassName: "arrow-icon",
        rankClassName: "arrow-icon",
        priceClassName: "visible"
      });
    } else if (value === "price" && this.state.sortAscendingPrice === false) {
      this.setState({
        coinsToDisplay: this.state.coinsToDisplay.sort(
          (a, b) => parseFloat(a.price_usd) - parseFloat(b.price_usd)
        ),
        sortBy: value,
        sortAscendingPrice: true,
        nameClassName: "arrow-icon",
        rankClassName: "arrow-icon",
        priceClassName: "visible"
      });
    }
  };
  //takes user input and filters coins by it
  getUserInput = e => {
    this.setState({ userInput: e.target.value });

    if (this.state.coins !== null && e.target.value !== null) {
      let result = this.state.coins.filter(coin => {
        let item;
        if (coin.name !== null) {
          let upperCaseCoin = coin.name.toString().toUpperCase();
          let userUpper = e.target.value.toUpperCase();

          if (upperCaseCoin.startsWith(userUpper)) {
            item = coin;
          }
        }
        return item;
      });

      this.setState({ coinsToDisplay: result });
    } else if (this.state.coins !== null) {
      this.setState({ coinsToDisplay: this.state.coins });
    }
  };
  //after render gets the cryptocurrencies from the API
  componentDidMount() {
    const url = "https://api.coinmarketcap.com/v1/ticker/?limit=200";
    fetch(url)
      .then(response => response.json())
      .then(coins => {
        this.setState({
          coins: coins,
          coinsToDisplay: coins
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Search getUserInput={this.getUserInput} />

        <CoinList
          coinsToDisplay={this.state.coinsToDisplay}
          setClass={this.setPriceClassName}
          setSortingBy={this.setSortingBy}
          sortAscendingName={this.state.sortAscendingName}
          sortAscendingRank={this.state.sortAscendingRank}
          sortAscendingPrice={this.state.sortAscendingPrice}
          getClass={this.getClasName}
          nameClassName={this.state.nameClassName}
          rankClassName={this.state.rankClassName}
          priceClassName={this.state.priceClassName}
        />
      </div>
    );
  }
}

export default App;
