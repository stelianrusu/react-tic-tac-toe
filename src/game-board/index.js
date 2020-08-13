import React from 'react';
import GameBoardCell from "../game-board-cell/"
import "./index.css"
class GameBoard extends React.Component {

    render() {
        const cells = [];
        for (let i = 0; i < this.props.cellStates.length; i++) {
            cells.push(<GameBoardCell key={this.props.cellStates[i].key}  cellState={this.props.cellStates[i]} onNextMove={this.props.onNextMove}/>);
        }
        return <div className="boardgame">
            {cells}
        </div>
    }
}

export default GameBoard;