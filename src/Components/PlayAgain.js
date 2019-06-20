import React,{Component} from 'react';
import '../CSS/PlayAgain.css';

class PlayAgain extends Component{
    render(){
        return(
            <div>
                <button type='button' onClick = {this.props.resetPlayArea}>Play Again</button>
            </div>
        )
    }
}

export default PlayAgain;