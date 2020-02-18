import GroceryActionTypes from './grocery.types';

import SHOP_ITEMS_DATA from '../../data/shopItems.data';
import { addGrocery, removeGrocery } from './grocery.utils';

const INITIAL_STATE = {
  shopData: SHOP_ITEMS_DATA,
  groceryItems: []  // [ { id, name, cost, qty } ]
}

const groceryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GroceryActionTypes.ADD_GROCERY:
      return {
        ...state,
        groceryItems: addGrocery(state.groceryItems, action.payload)
      };
    case GroceryActionTypes.REMOVE_GROCERY:
      return {
        ...state,
        groceryItems: removeGrocery(state.groceryItems, action.payload)
      }
    default:
      return state;
  }
}

export default groceryReducer;