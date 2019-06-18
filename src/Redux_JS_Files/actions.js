import { UPDATE_WINS1, UPDATE_WINS2, WE_GOT_A_WINNER, Robot_ID_OF_PLAYER_INC, Robot_ID_OF_PLAYER_DEC, PLAYER1_DETAILS, PLAYER2_DETAILS, PLAYER_TURN } from './constants';

export const Increment_ID = () => {
    return{
        type:Robot_ID_OF_PLAYER_INC,
    }
};

export const Decrement_ID = () => {
    return{
        type:Robot_ID_OF_PLAYER_DEC,
    }
};

export const Player1 = (text,id) => {
    return{
        type:PLAYER1_DETAILS,
        payload:text,
        image_id:id,
    }
}

export const Player2 = (text,id) => {
    return{
        type:PLAYER2_DETAILS,
        payload:text,
        image_id:id,
    }
}

export const Turn = (text,successfail) => {
    return{
        type:PLAYER_TURN,
        payload:text,
        result:successfail,
    }
}

export const SomeoneWon = (text,text2) => {
    return{
        type:WE_GOT_A_WINNER,
        payload:text,
        winner:text2,
    }
}

export const UpdateWinsOf1 = () => {
    return{
        type:UPDATE_WINS1,
    }
}

export const UpdateWinsOf2 = () => {
    return{
        type:UPDATE_WINS2,
    }
}