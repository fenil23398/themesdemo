import { createStore,combineReducers } from 'redux';
import { LineData } from './Reducers/lineData';
import { PieData } from './Reducers/piechart';

export const ConfigureStore = () =>{
    const store = createStore(
          combineReducers({
                lineData : LineData,
                pieData : PieData
          })
        );
    return store;
}