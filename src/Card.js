import React, { Component} from 'react';
import './Card.css';
import FlipCard from 'react-flipcard';

export default class Card extends Component {
  render() {
    
    return (
      <div className={this.props.found ? "card hidden" : "card"} onClick={this.props.selectCard}>

        <FlipCard 
          flipped={this.props.comparativeCard || this.props.found}
          disabled={true}
        >
          <div className="back"></div>
          <div className="card-content">
            <img src={this.props.image} alt="imagen de baraja" className="card-content"/>
            
          </div>
        </FlipCard>
       
      </div>
    )
  }
}