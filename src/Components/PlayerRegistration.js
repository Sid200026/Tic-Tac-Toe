import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Increment_ID, Decrement_ID, Player1, Player2 } from '../Redux_JS_Files/actions';
import '../CSS/PlayerRegistration.css';

const mapStateToProps = (state) => {
    return{
        id:state.Change_Id_Of_Robot.id,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        ChangeRobot: () => dispatch(Increment_ID()),
        RevertRobot: () => dispatch(Decrement_ID()),
        RegisterPlayer1: (Name,id) => dispatch(Player1(Name,id)),
        RegisterPlayer2: (Name,id) => dispatch(Player2(Name,id)),
    }
}

class Player_Registration extends Component{

    constructor(){
        super();
        this.Name = 'Player1';
        this.id = 0;
    }

    updateName = (event) => {
        this.Name = event.target.value;
    }

    registerPlayer = () => {
        if(this.props.playerNumber === 1)
            this.props.RegisterPlayer1(this.Name,this.props.id);
        else   
            this.props.RegisterPlayer2(this.Name,this.props.id);
        this.props.register();
    }

    render(){
        return(
            <form>
                <div className='Register'>
                        <div style={{marginTop:8}}>
                            <h1 style={{textAlign:"center",fontSize:'22px',color:'green'}}>Player {this.props.playerNumber}</h1>
                            <h3 style={{textAlign:"center",fontSize:'22px'}}>Name</h3>
                            <input type='text' placeholder='Enter your name....' className='NameInput' onInput={this.updateName}></input>
                        </div>
                        <img src = {`https://robohash.org/${this.props.id}`} alt = 'Oops...' className = 'RobotImage'></img>
                        <div>
                            <button type='button' className='Changebtn' onClick = {this.props.ChangeRobot}>Change</button>
                            <button type='button' className='Revertbtn' onClick = {this.props.RevertRobot}>Revert</button>
                        </div>
                        <button type='reset' className='Registerbtn' onClick={this.registerPlayer}>Register</button>
                </div>
            </form>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player_Registration);
