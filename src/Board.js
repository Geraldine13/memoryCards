import React, { Component } from 'react';
import Card from './Card';
import './Board.css';

export default class Board extends Component {
  render() {
    return (
     <div className="board">
      {
        this.props.packOfCards
          .map((card, index) => {
            const comparativeCard = this.props.cardSelected.indexOf(card) > -1;

            return <Card 
              key={index}
              image={card.image}
              found={card.found}
              comparativeCard={comparativeCard}
              selectCard={() => this.props.selectCard(card)}
              />
          })
      }
     </div>     
    )
  }

}