import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../CSS/TicTacToeBox.css';
import { Turn, SomeoneWon } from '../Redux_JS_Files/actions';

const mapStateToProps = (state) => {
    return {
        player: state.Move.player,
        pos: state.Move.position,
        result: state.Move.won,
        player1name: state.Get_Player1_Details.name,
        player2name: state.Get_Player2_Details.name,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        PlayerSelected: (position, resultOfMatch) => dispatch(Turn(position, resultOfMatch)),
        WeGotAWinner: (successfail, winnerplayer) => dispatch(SomeoneWon(successfail,winnerplayer)),
    }
}


class TicTacToeBox extends Component {

    constructor() {
        super();
        this.state = {
            winnerCheck: false,
            winnerName: '',
            text : '',
        }
    }

    SelectionDone = () => {
        if (this.props.win() === false) {
            if (this.props.pos.includes(this.props.number) === false) {
                if (this.props.player === 1)
                    this.setState({text:'X'});
                else
                    this.setState({text:'O'});
                window.setTimeout(this.checkWinner, 1);
            }
        }
    }

    checkWinner = () => {
        this.props.PlayerSelected(this.props.number, this.props.win());
        this.props.getPos();
        if (this.props.win() === true) {
            this.setState({ winnerCheck: true });
            if (this.props.playerNum === 2) {
                this.setState({ winnerName: this.props.player1name });
            }
            else {
                this.setState({ winnerName: this.props.player2name });
            }
            this.props.WeGotAWinner(this.props.win(),this.state.winnerName);
        }
    }
    render() {
        return (
            <div>
                {this.props.win()===false &&
                    <div className='box' onClick={this.SelectionDone}>
                        <div>
                            {this.state.text === 'X' &&
                                <h1 style={{fontSize:'70px',color:'red'}}>{this.state.text}</h1>
                            }
                            {this.state.text === 'O' &&
                                <h1 style={{fontSize:'70px',color:'blue'}}>{this.state.text}</h1>
                            }
                        </div>
                    </div>
                }
                {this.props.win()===true &&
                    <div className='box'>
                        <div>
                            {this.state.text === 'X' &&
                                <h1 style={{fontSize:'70px',color:'red'}}>{this.state.text}</h1>
                            }
                            {this.state.text === 'O' &&
                                <h1 style={{fontSize:'70px',color:'blue'}}>{this.state.text}</h1>
                            }
                        </div>  
                    </div>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeBox);