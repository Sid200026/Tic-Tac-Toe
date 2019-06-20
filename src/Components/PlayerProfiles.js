import React,{Component} from 'react';
import { connect } from 'react-redux';
import '../CSS/PlayerProfiles.css';
import PlayAgain from './PlayAgain';
const mapStateToProps = (state) => {
    return{
        id1:state.Get_Player1_Details.id,
        name1:state.Get_Player1_Details.name,
        wins1:state.Get_Player1_Details.wins,
        id2:state.Get_Player2_Details.id,
        name2:state.Get_Player2_Details.name,
        wins2:state.Get_Player2_Details.wins,
    }
}

class PlayerProfiles extends Component{

    PlayerAskedToReset = () => {
        this.props.resetPlayArea();
    }

    render(){
        return(
            <div className='PlayerDetails'>
                <div className='Player1'>
                    <h1>{this.props.name1}</h1>
                    <img src={`https://robohash.org/${this.props.id1}`} alt='Player1'></img>
                    <h1 style={{marginTop:'10px'}}>Wins : {this.props.wins1}</h1>
                </div>
                <div>
                            <PlayAgain resetPlayArea={this.PlayerAskedToReset}/>
                </div>
                <div className='Player2'>
                    <h1>{this.props.name2}</h1>
                    <img src={`https://robohash.org/${this.props.id2}`} alt='Player2'></img>
                    <h1 style={{marginTop:'10px'}}>Wins : {this.props.wins2}</h1>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,{})(PlayerProfiles);