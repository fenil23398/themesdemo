import { GET_LINEDATA,ADD_LINEDATA, GET_PIEDATA } from '../ActionTypes';

export const addLineData  = (dataObj) => ({
    type : ADD_LINEDATA,
    payload : dataObj
})

export const getPieData = () => ({
    type : GET_LINEDATA
})