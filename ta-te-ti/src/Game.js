import React from 'react';
import Board from './Board';
import calculateWinner from './calculateWinner'
import './Game.css'

class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null)
        }],
        xIsNext: true
      };
    }
  
    handleClick(i) {
      const history = this.state.history;
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : '0';
      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        xIsNext: !this.state.xIsNext,
      });
    }
    
    render() {
      const history = this.state.history;
      const current = history[history.length - 1];
      const winner = calculateWinner(current.squares);
  
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
  
      return (
        <div className="game">
          <div className="game-boar">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div className="status">{status}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  export default Game