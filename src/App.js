import React, { Component } from 'react';
import Header from './Header';
import Board from './Board';
// import logo from './logo.svg';
import './App.css';
import showCards from './utils/showCards';

const getInitialState = () => {
  const packOfCards = showCards();
  // console.log(packOfCards);
  
  return {
    packOfCards,
    cardSelected: [],
    comparing: false,
    numberAttempt: 0
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  render() {
    return (
      <div className="App">
        <Header
          numberAttempt = {this.state.numberAttempt}
          restartGame = {() => this.restartGame()}
        />

        <Board
          packOfCards = {this.state.packOfCards}
          cardSelected = {this.state.cardSelected}
          selectCard = {(card) => this.selectCard(card)}
        />
      </div>
    );
  }

  selectCard = (card) => {
    if (
      this.state.comparing ||
      this.state.cardSelected.indexOf(card) > -1 ||
      card.found
    ) { 
      return;
    }

    const cardSelected = [...this.state.cardSelected, card];
    this.setState({
      cardSelected,
    })

    if (cardSelected.length === 2) {
      this.comparePair(cardSelected);
    }
  }

  comparePair(cardSelected) {
    this.setState({comparing: true});
    
    setTimeout(() => {
      
      const [firstCard, secondCard] = cardSelected;
      let packOfCards = this.state.packOfCards;

      if (firstCard.image === secondCard.image) {
        packOfCards = packOfCards.map((card) => {
          if (card.image !== firstCard.image) {
            return card;
          }
          
          return {...card, found: true};
        })
        
      }
      this.gameOver(packOfCards);
      this.setState({
        packOfCards,
        cardSelected: [],
        comparing: false,
        numberAttempt: this.state.numberAttempt + 1
      })

    }, 1000)

  }
  
  gameOver(packOfCards) {
    if (packOfCards.filter((card) => !card.found).length === 0) {
      alert(`Juego Terminado! \nGanaste en ${this.state.numberAttempt} intentos!`)
    }
  }

  restartGame() {
    this.setState(
      getInitialState()
    )
  }

}

export default App;
