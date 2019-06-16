import { Robot_ID_OF_PLAYER1_INC, Robot_ID_OF_PLAYER1_DEC } from './constants';

export const Increment_ID = () => {
    return{
        type:Robot_ID_OF_PLAYER1_INC,
    }
};

export const Decrement_ID = () => {
    return{
        type:Robot_ID_OF_PLAYER1_DEC,
    }
};