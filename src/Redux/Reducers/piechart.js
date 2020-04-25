import { GET_PIEDATA,ADD_PIEDATA } from '../ActionTypes';

const initialState = {
    pieData : {},
}

export const PieData = (state = initialState,action) => {
    switch(action.type){
        case GET_PIEDATA :
                return{
                    ...state,
                    pieData : action.payload
                }
               break;
        case ADD_PIEDATA : 
            
            return state.concate();
        default : 
            return state;
    }
}