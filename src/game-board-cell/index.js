import React from "react";
import "./index.css";

class GameBoardCell extends React.Component{
    onCellClicked = (e)=>{
        e.preventDefault();
        if(this.props.cellState.value === "")
            this.props.onNextMove(this.props.cellState.key);
    }
    render(props){
        return <div className={`game-cell-container ${this.props.cellState.isWinning?"winning":""}`} onClick={this.onCellClicked}>{this.props.cellState.value}</div>
    }
}

export default GameBoardCell;