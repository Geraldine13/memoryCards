import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <button className="btn-restart" onClick={this.props.restartGame}>Reiniciar juego</button>
        </div>
        <div className="title">Reta a tu memoria con Cartas</div>
        <div className="title">Intentos: {this.props.numberAttempt}</div>
      </header>

    )
  }
}