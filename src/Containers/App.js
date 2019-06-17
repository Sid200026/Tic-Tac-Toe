import React,{Component} from 'react';
import { connect } from 'react-redux';
import PlayerRegistration from '../Components/PlayerRegistration';
import PlayerProfiles from '../Components/PlayerProfiles';
import WindowToSmall from './WindowToSmall';
import TicTacToeBox from '../Components/TicTacToeBox';
import '../CSS/app.css';

const mapStateToProps = (state) => {
    return{
        alreadySelected:state.Move.position,
    }
}

class app extends Component{

    constructor(){
        super();
        this.state = {
            playerNumber : 1,
            PlayerRegistrationComplete : false,
            windowIsSmall:false,
            gameArray:[0,0,0,0,0,0,0,0,0],
            hasWon:false,
            player:1,
        };
    }

    register = () => {
        if(this.state.playerNumber === 1)
            this.setState({playerNumber:this.state.playerNumber+1});
        else   
            this.setState({PlayerRegistrationComplete:true});
    }

    screenWindowIsSmall = () => {
        if(window.innerWidth<640)
        {
            this.setState({windowIsSmall:true});
        }
        else{
            this.setState({windowIsSmall:false});
        }
    }

    playerHasWon = () => {
        let ans = false;
        if(this.state.gameArray[0] !==0 && this.state.gameArray[0]===this.state.gameArray[1] && this.state.gameArray[0]===this.state.gameArray[2])
        {
            ans = true;
        }
        else if(this.state.gameArray[3] !==0 && this.state.gameArray[3]===this.state.gameArray[4] && this.state.gameArray[3]===this.state.gameArray[5])
        {
            ans = true;
        }
        else if(this.state.gameArray[6] !==0 && this.state.gameArray[6]===this.state.gameArray[7] && this.state.gameArray[6]===this.state.gameArray[8])
        {
            ans = true;
        }
        else if(this.state.gameArray[0] !==0 && this.state.gameArray[0]===this.state.gameArray[3] && this.state.gameArray[0]===this.state.gameArray[6])
        {
            ans = true;
        }
        else if(this.state.gameArray[1] !==0 && this.state.gameArray[1]===this.state.gameArray[4] && this.state.gameArray[1]===this.state.gameArray[7])
        {
            ans = true;
        }
        else if(this.state.gameArray[2] !==0 && this.state.gameArray[2]===this.state.gameArray[5] && this.state.gameArray[2]===this.state.gameArray[8])
        {
            ans = true;
        }
        else if(this.state.gameArray[0] !==0 && this.state.gameArray[0]===this.state.gameArray[4] && this.state.gameArray[0]===this.state.gameArray[8])
        {
            ans = true;
        }
        else if(this.state.gameArray[2] !==0 && this.state.gameArray[2]===this.state.gameArray[4] && this.state.gameArray[2]===this.state.gameArray[6])
        {
            ans = true;
        }
        return ans;
    }

    getPositions = () => {
        for(let i=0;i<this.props.alreadySelected.length+1;i++){
            if(this.state.gameArray[this.props.alreadySelected[i]]===0)
            {
                const tempArray = this.state.gameArray;
                if(i%2===0)
                {
                    this.setState({player:2});
                    tempArray[this.props.alreadySelected[i]]=1;
                }
                else{
                    this.setState({player:1});
                    tempArray[this.props.alreadySelected[i]]=2;
                }
                this.setState({gameArray:tempArray});
            }
        }
    }

    render(){
        return(
            <div onMouseMove={this.screenWindowIsSmall}>
            {!this.state.windowIsSmall &&
            <div className='background'>
                <h1 style={{fontSize:'45px',textAlign:'center',marginBottom:'15px',marginTop:'8px'}} className='header'>Tic-Tac-Toe</h1>
                {this.state.PlayerRegistrationComplete === false &&
                    <div className='register'>
                        <PlayerRegistration register={this.register} playerNumber={this.state.playerNumber}/>
                    </div>
                }
                {this.state.PlayerRegistrationComplete === true &&
                    <div>
                        <PlayerProfiles />
                        <div className='Tic-Tac-Toe'>
                            <div>
                                <TicTacToeBox number={0} getPos={this.getPositions} win={this.playerHasWon} playerNum = {this.state.player}/>
                                <TicTacToeBox number={3} getPos={this.getPositions} win={this.playerHasWon} playerNum = {this.state.player}/>
                                <TicTacToeBox number={6} getPos={this.getPositions} win={this.playerHasWon} playerNum = {this.state.player}/>
                            </div>
                            <div>
                                <TicTacToeBox number={1} getPos={this.getPositions} win={this.playerHasWon} playerNum = {this.state.player}/>
                                <TicTacToeBox number={4} getPos={this.getPositions} win={this.playerHasWon} playerNum = {this.state.player}/>
                                <TicTacToeBox number={7} getPos={this.getPositions} win={this.playerHasWon} playerNum = {this.state.player}/>
                            </div>
                            <div>
                                <TicTacToeBox number={2} getPos={this.getPositions} win={this.playerHasWon} playerNum = {this.state.player}/>
                                <TicTacToeBox number={5} getPos={this.getPositions} win={this.playerHasWon} playerNum = {this.state.player}/>
                                <TicTacToeBox number={8} getPos={this.getPositions} win={this.playerHasWon} playerNum = {this.state.player}/>
                            </div>
                        </div>
                    </div>
                }
                <div className='link'>
                    <a href="https://github.com/Sid200026" className='linkText'target='_blank' rel="noopener noreferrer">
                        <h4 >Made by Siddharth Singha Roy</h4>
                    </a>
                </div>
            </div>
            }
            {this.state.windowIsSmall && 
                <WindowToSmall />
            }
            </div>
        );
    }
}

export default connect(mapStateToProps,{})(app);