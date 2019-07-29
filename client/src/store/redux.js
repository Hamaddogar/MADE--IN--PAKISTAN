import { createStore, combineReducers } from 'redux';

import reducer_Register from '../store/Reducers/reducer_Register';
import searchReducers from '../store/Reducers/searchReducers';
import loginreducers from '../store/Reducers/loginreducers';
import detailreducers from '../store/Reducers/detailreducers';
import consultingservicereducers from '../store/Reducers/admindashredusers';




let  redusers = combineReducers({ reducer_Register,searchReducers,loginreducers,detailreducers,consultingservicereducers });

let store = createStore(redusers)



export default store;