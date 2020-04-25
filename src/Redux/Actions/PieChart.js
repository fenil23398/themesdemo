import { GET_PIEDATA,ADD_PIEDATA } from '../ActionTypes';

export const addPieData  = (dataObj) => ({
    type : ADD_PIEDATA,
    payload : dataObj
})

export function getPieData(){    
    console.log("Inside GEt Pie Data Action ")    
    return dispatch => {
    return fetch("https://backendthemesdemo.herokuapp.com/getRevenueData/1",{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(data => data.json())
    .then(res => {
        console.log("Result received ",res)
        dispatch({
            type : GET_PIEDATA,
            payload : res.data
        })
    })
    .catch(Err => {
        console.log("Error While Fetching Line Data ",Err)
    })
    }
}
