import React,{Component} from 'react';
import PlayerRegistration from '../Components/PlayerRegistration';
import PlayerProfiles from '../Components/PlayerProfiles';
import WindowToSmall from './WindowToSmall';
import '../CSS/app.css';

class app extends Component{

    constructor(){
        super();
        this.state = {
            playerNumber : 1,
            PlayerRegistrationComplete : false,
            windowIsSmall:false,
        };
        this.screensize = document.getElementsByClassName('screen')[0];
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

export default app;