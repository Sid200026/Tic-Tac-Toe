import { UPDATE_WINS1, UPDATE_WINS2, WE_GOT_A_WINNER, Robot_ID_OF_PLAYER_INC, Robot_ID_OF_PLAYER_DEC, PLAYER1_DETAILS, PLAYER2_DETAILS, PLAYER_TURN } from './constants';

const InitialState = {
    id:0,
}

export const Change_Id_Of_Robot = (state=InitialState, action={}) => {
    switch(action.type){
        case Robot_ID_OF_PLAYER_INC:
            return Object.assign({},state,{id:state.id+1});
        case Robot_ID_OF_PLAYER_DEC:
            return Object.assign({},state,{id:state.id-1});
        default:
            return state;
    }
}

const initialPlayer1 = {
    name:'Player1',
    id:0,
    wins:0,
}

export const Get_Player1_Details = (state=initialPlayer1, action={}) => {
    switch(action.type){
        case PLAYER1_DETAILS:
            return Object.assign({},state,{name:action.payload},{id:action.image_id});
        case UPDATE_WINS1:
            return Object.assign({},state,{wins:state.wins+1},);
        default:
            return state;
    }
}

const initialPlayer2 = {
    name:'Player2',
    id:0,
    wins:0,
}

export const Get_Player2_Details = (state=initialPlayer2, action={}) => {
    switch(action.type){
        case PLAYER2_DETAILS:
            return Object.assign({},state,{name:action.payload},{id:action.image_id});
        case UPDATE_WINS2:
            return Object.assign({},state,{wins:state.wins+1},);
        default:
            return state;
    }
}

const initialMove = {
    won:false,
    player:1,
    position:'',
}

export const Move = (state=initialMove, action={}) => {
    switch(action.type){
        case PLAYER_TURN:
            return Object.assign({},state,{won:action.result},{player:(state.player%2)+1},{position:(state.position)+[action.payload]});
        case WE_GOT_A_WINNER:
            return Object.assign({},state,{won:action.payload},{player:action.winner});
        default:
            return state;
    }
}