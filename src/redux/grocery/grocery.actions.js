import GroceryActionTypes from './grocery.types';

export const addGrocery = state => ({
  type: GroceryActionTypes.ADD_GROCERY,
  payload: state
});

export const removeGrocery = state => ({
  type: GroceryActionTypes.REMOVE_GROCERY,
  payload: state
});