import { createStore,combineReducers,applyMiddleware } from 'redux';
import { LineData } from './Reducers/lineData';
import { PieData } from './Reducers/piechart';
import thunk from "redux-thunk";

export const ConfigureStore = () =>{
    const store = createStore(
          combineReducers({
                lineData : LineData,
                pieData : PieData
          }),
          applyMiddleware(thunk)
        );
    return store;
}