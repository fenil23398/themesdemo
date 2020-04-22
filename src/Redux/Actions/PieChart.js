import { GET_PIEDATA,ADD_PIEDATA } from '../ActionTypes';

export const addPieData  = (dataObj) => ({
    type : ADD_PIEDATA,
    payload : dataObj
})

export const getPieData = () => ({
    type : GET_PIEDATA
})