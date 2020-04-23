import { GET_LINEDATA,ADD_LINEDATA } from '../ActionTypes';

const initialState = {
    lineData : {},
    singleData : 1
}

export const LineData = (state = initialState,action) => {
    switch(action.type){
        case GET_LINEDATA :
            return {
                ...state,
                lineData : action.payload
            }
            break;
        default : 
            return state;
    }
}