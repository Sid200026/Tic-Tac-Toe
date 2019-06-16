import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Increment_ID, Decrement_ID } from '../Redux_JS_Files/actions';
import '../CSS/PlaterRegistration.css';

const mapStateToProps = (state) => {
    return{
        id:state.Change_Id_Of_Robot.id,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        ChangeRobot: () => dispatch(Increment_ID()),
        RevertRobot: () => dispatch(Decrement_ID()),
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
        console.log(this.Name);
    }

    render(){
        return(
            <div className='Register'>
                <div style={{marginTop:8}}>
                    <h3 style={{textAlign:"center",fontSize:'22px'}}>Name</h3>
                    <input type='text' placeholder='Enter your name....' className='NameInput' onInput={this.updateName}></input>
                </div>
                <img src = {`https://robohash.org/${this.props.id}`} alt = 'Oops...' className = 'RobotImage'></img>
                <div>
                    <button type='button' className='Changebtn' onClick = {this.props.ChangeRobot}>Change</button>
                    <button type='button' className='Revertbtn' onClick = {this.props.RevertRobot}>Revert</button>
                </div>
                <button type='button' className='Registerbtn'>Register</button>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player_Registration);
