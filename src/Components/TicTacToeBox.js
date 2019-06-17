import React,{Component} from 'react';
import {connect} from 'react-redux';
import GetUserInput from './GetUserInput';
import '../CSS/TicTacToeBox.css';
import { Turn } from '../Redux_JS_Files/actions';

const mapStateToProps = (state) => {
    return{
        player:state.Move.player,
        pos:state.Move.position,
        result:state.Move.won,
        player1name:state.Get_Player1_Details.name,
        player2name:state.Get_Player2_Details.name,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        PlayerSelected : (position,resultOfMatch) => dispatch(Turn(position,resultOfMatch)),
    }
}


class TicTacToeBox extends Component{
    
    constructor(){
        super();
        this.text='';
        this.winnerCheck=false;
        this.winnerName='';
    }

    SelectionDone = () =>{
        if(this.props.win()===false)
        {
            if(this.props.pos.includes(this.props.number)===false)
            {
                this.props.PlayerSelected(this.props.number,this.props.win());  
                if(this.props.player===1)
                    this.text='X';
                else
                    this.text='O';  
            }
        }
        console.log(this.props.pos);
        this.props.getPos();
        if(this.props.win()===true)
        {
            this.winnerCheck=true;
            if(this.props.playerNum===1)
            {
                this.winnerName=this.props.player1name;
            }
            else
            {
                this.winnerName=this.props.player2name;
            }
        }
        console.log(this.winnerName,this.winnerCheck);
    }

    render(){
        return(
            <div>
                <div className='box' onClick={this.SelectionDone}>
                <GetUserInput text={this.text} />
                </div>
                {this.winnerCheck===true &&
                <h1>{this.winnerName} Won the Game</h1>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TicTacToeBox);