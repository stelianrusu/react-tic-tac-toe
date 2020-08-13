import React from 'react';
import GameBoard from "../game-board"
import _ from "lodash"

class Game extends React.Component {
    constructor(props) {
        super(props);
        const N = 3;

        const cellStates = [];
        for (let i = 1; i <= N; i++) {
            for (let j = 1; j <= N; j++) {
                cellStates.push({ key: `${i}${j}`, value: "", isWinning: false });
            }
        }

        this.state = { cellStates: cellStates, currentPlayer: "X", winner: "" };
    }
    onNextMove = (cellKey) => {
        const cellStates = this.state.cellStates;
        let clickedCell = _.filter(cellStates, { key: cellKey })[0];
        clickedCell.value = this.state.currentPlayer;
        this.setState({ cellStates: cellStates });
        const winningCombi = this.lookForWinningCombination(this.state.currentPlayer);
        if (winningCombi) {
            _.forEach(winningCombi, winningKey => {
                _.find(cellStates, c => c.key === winningKey).isWinning = true;
            });
            this.setState({ winner: this.state.currentPlayer, cellStates: cellStates });

        }
        else
            this.setState({ currentPlayer: this.state.currentPlayer == "X" ? "0" : "X" });
    }

    lookForWinningCombination = (player) => {
        const cellStates = this.state.cellStates;
        const playerMoves = _.map(_.filter(cellStates, { value: player }), i => i.key);

        const combi = [
            ["11", "22", "33"],
            ["31", "22", "13"],
            ["11", "12", "13"],
            ["21", "22", "23"],
            ["31", "32", "33"],
            ["11", "12", "13"],
            ["21", "22", "23"],
            ["31", "32", "33"],
        ];

        return _.find(combi, c => _.difference(c, playerMoves).length == 0);
    }
    render() {
        return <div>
            <GameBoard onNextMove={this.onNextMove} cellStates={this.state.cellStates} winningCombi={this.state.winningCombi} />
            <div>
                {this.state.winner !== "" &&
                    <span>Player {this.state.winner} has won</span>
                }
            </div>
        </div>

    }
}

export default Game;