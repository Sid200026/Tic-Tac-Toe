import { Robot_ID_OF_PLAYER1_INC, Robot_ID_OF_PLAYER1_DEC } from './constants';

const InitialState = {
    id:0,
}

export const Change_Id_Of_Robot = (state=InitialState, action={}) => {
    switch(action.type){
        case Robot_ID_OF_PLAYER1_INC:
            return Object.assign({},state,{id:state.id+1});
        case Robot_ID_OF_PLAYER1_DEC:
            return Object.assign({},state,{id:state.id-1});
        default:
            return state;
    }
}