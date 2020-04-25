import { GET_LINEDATA,ADD_LINEDATA, GET_PIEDATA } from '../ActionTypes';
// import fetch from 'cross-fetch';
export const addLineData  = (dataObj) => ({
    type : ADD_LINEDATA,
    payload : dataObj
})

export function getLineDataa(){
    console.log("Reached Inside get LInedAta")
    return dispatch =>{
        
    return fetch("https://backendthemesdemo.herokuapp.com/getMonthwiseEarnings/1",{
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
            type : GET_LINEDATA,
            payload : res.data
        })
    })
    .catch(Err => {
        console.log("Error While Fetching Line Data ",Err)
    })
    }
  }  
 export const getLineData = () => ({
        // return dispatch => {
        //     return fetch("https://backendthemesdemo.herokuapp.com/getMonthwiseEarnings/1")
        //     .then(data => data.json())
        // }
    //  fetch("https://backendthemesdemo.herokuapp.com/getMonthwiseEarnings/1",{
    //     method : 'GET',
    //     headers : {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     }
    // })
    // .then(data => data.json())
    // .then(res => {
    //     console.log("ON api Data Received",res)
    // })
    
        type : GET_LINEDATA,
        payload : [
        {
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
            name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
        {
            name: 'Page H', uv: 3490, pv: 4300, amt: 2100,
        },
        {
            name: 'Page I', uv: 3490, pv: 4300, amt: 2100,
        },
        {
            name: 'Page J', uv: 3490, pv: 4300, amt: 2100,
        },
        {
            name: 'Page K', uv: 10490, pv: 4300, amt: 2100,
        },
        {
            name: 'Page L', uv: 9490, pv: 4300, amt: 2100,
        },
    ]
})