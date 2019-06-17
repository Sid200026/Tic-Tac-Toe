import React,{Component} from 'react';
import PlayerRegistration from '../Components/PlayerRegistration';
import '../CSS/app.css';

class app extends Component{

    constructor(){
        super();
        this.state = {
            playerNumber : 1,
            PlayerRegistrationComplete : false,
        };
        console.log(window.orientation);
    }

    register = () => {
        if(this.state.playerNumber === 1)
            this.setState({playerNumber:this.state.playerNumber+1});
        else   
            this.setState({PlayerRegistrationComplete:true});
    }

    render(){
        return(
            <div className='background'>
                <h1 style={{fontSize:'45px',textAlign:'center',marginBottom:'15px',marginTop:'8px'}} className='header'>Tic-Tac-Toe</h1>
                {this.state.PlayerRegistrationComplete === false &&
                    <div className='register'>
                        <PlayerRegistration register={this.register} playerNumber={this.state.playerNumber}/>
                    </div>
                }
                {this.state.PlayerRegistrationComplete === true &&
                    <h1>Hello World</h1>
                }
                <div className='link'>
                    <a href="https://github.com/Sid200026" className='linkText'target='_blank' rel="noopener noreferrer">
                        <h4 >Made by Siddharth Singha Roy</h4>
                    </a>
                </div>
            </div>
        );
    }
}

export default app;