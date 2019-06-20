import React,{Component} from 'react';
import { connect } from 'react-redux';
import PlayerRegistration from '../Components/PlayerRegistration';
import PlayerProfiles from '../Components/PlayerProfiles';
import WindowToSmall from './WindowToSmall';
import TicTacToeBox from '../Components/TicTacToeBox';
import '../CSS/app.css';
import { UpdateWinsOf1, UpdateWinsOf2, Reset } from '../Redux_JS_Files/actions';
const mapStateToProps = (state) => {
    return{
        alreadySelected:state.Move.position,
        winnerStatus : state.Move.won,
        winnerName : state.Move.player,
        player1:state.Get_Player1_Details.name,
        player2:state.Get_Player2_Details.name,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        UpdateWinsOfPlayer1: () => dispatch(UpdateWinsOf1()),
        UpdateWinsOfPlayer2: () => dispatch(UpdateWinsOf2()),
        PlayAgain: () => dispatch(Reset()),
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
        this.update=false;
        this.PlayerAskedToReset=this.PlayerAskedToReset.bind(this);
    }

    PlayerAskedToReset = () => {
        this.setState ({playerNumber : 1, gameArray:[0,0,0,0,0,0,0,0,0], hasWon:false, player:1,});
        this.props.PlayAgain();
        this.update=false;
    }

    register = () => {
        if(this.state.playerNumber === 1)
            this.setState({playerNumber:this.state.playerNumber+1});
        else   
            this.setState({PlayerRegistrationComplete:true});
    }

    screenWindowIsSmall = () => {
        if(this.props.winnerStatus===true)
        {
            this.setState({hasWon:true,player:this.props.winnerName});
        }
        if(window.innerWidth<640)
        {
            this.setState({windowIsSmall:true});
        }
        else{
            this.setState({windowIsSmall:false});
        }
    }

    updateWinner = () => {
        if(this.state.player===2)
            this.props.UpdateWinsOfPlayer1();
        else   
            this.props.UpdateWinsOfPlayer2();
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
        if(ans===false)
        if(this.state.gameArray.find((ele) => {return ele===0;}) === undefined && this.state.hasWon===false)
        {
            this.setState({hasWon:'Tie'});
        }
        if(this.props.winnerStatus===true && this.update===false)
        {
            this.update=true;
            this.updateWinner();
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

    check =() => {
        this.playerHasWon();
        if(this.state.gameArray.find((ele) => {return ele===0;}) === undefined && this.state.hasWon===false)
        {
            this.setState({hasWon:'Tie'});
        }
    }

    render(){
        return(
            <div onMouseMove={this.screenWindowIsSmall}>
            {!this.state.windowIsSmall &&
            <div className='background'>
                <h1 style={{fontSize:'45px',textAlign:'center',marginBottom:'15px',marginTop:'8px','cursor':'default'}} className='header'>Tic-Tac-Toe</h1>
                {this.state.PlayerRegistrationComplete === false &&
                    <div className='register'>
                        <PlayerRegistration register={this.register} playerNumber={this.state.playerNumber}/>
                    </div>
                }
                {this.state.PlayerRegistrationComplete === true &&
                    <div>
                        <PlayerProfiles resetPlayArea={this.PlayerAskedToReset}/>
                        <div className='Tic-Tac-Toe' onClick={this.check}>
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
                <div className='Winner'>
                    {this.props.winnerStatus===true &&
                        <div>
                        {this.state.player===2 &&           //Instant Display
                            <h1 >{this.props.player1} has Won the Game</h1>
                        }
                        {this.state.hasWon===true &&
                            <h1>{this.state.player} has Won the Game</h1> // Keeps it there
                        }
                        {this.state.player===1 &&
                            <h1>{this.props.player2} has Won the Game</h1>
                        }
                        </div>
                    }
                    {this.state.hasWon==='Tie' &&
                        <h1>Tie Game</h1>
                    }
                </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(app);