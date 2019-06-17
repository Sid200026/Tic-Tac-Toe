import React,{Component} from 'react';
import '../CSS/TicTacToeBox.css';

class GetUserInput extends Component{
    render(){
        return(
            <h1 style={{fontSize:'70px'}}>{this.props.text}</h1>
        );
    }
}

export default GetUserInput;