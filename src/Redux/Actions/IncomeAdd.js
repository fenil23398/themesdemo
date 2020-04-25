import { ADD_INCOME } from '../ActionTypes';
import { getPieData } from "./PieChart";
import { getLineDataa } from "./LineChart";
var income = {
    'userId': 1,
    'revenueId': 1,
    'earningAmount': 3000,
    'timestamp': '2020-04-19 12:00:00'
}

export function addIncome(incomeObj) {
    return dispatch => {
        return fetch("https://backendthemesdemo.herokuapp.com/addIncomeForm/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(income)
        })
            .then(res => {
                res.json();
                console.log("Inside SuccessFully Added Income",res)
                dispatch(getPieData())
                dispatch(getLineDataa())
            }
            )
            .catch(err => {
                console.log("Error in Adding Income")
            })

    }
}