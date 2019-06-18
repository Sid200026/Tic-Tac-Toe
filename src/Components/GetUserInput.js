import React,{Component} from 'react';
import '../CSS/TicTacToeBox.css';

class GetUserInput extends Component{
    render(){
        return(
            <div>
            {this.props.text === 'X' &&
                <h1 style={{fontSize:'70px',color:'red'}}>{this.props.text}</h1>
            }
            {this.props.text === 'O' &&
                <h1 style={{fontSize:'70px',color:'blue'}}>{this.props.text}</h1>
            }
            </div>
        );
    }
}

export default GetUserInput;