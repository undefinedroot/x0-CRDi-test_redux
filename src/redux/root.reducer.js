import { combineReducers } from 'redux';

import groceryReducer from './grocery/grocery.reducer';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'

const configPersist = {
  key: 'root',
  storage,
  whitelist: ['grocery']
}

// place the return object as a state property of the central state of redux
//    state.grocery

const rootReducer = combineReducers({
  grocery: groceryReducer
});

export default persistReducer(configPersist, rootReducer);