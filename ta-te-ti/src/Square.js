import React from 'react'
import './Square.css'

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        <div className="value">{props.value}</div>
      </button>
    );
  }

  export default Square