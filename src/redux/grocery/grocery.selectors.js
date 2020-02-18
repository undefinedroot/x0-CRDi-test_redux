import { createSelector } from 'reselect';

const groceryStateSelector = state => state.grocery;

export const groceryItemsSelector = createSelector(
  [groceryStateSelector],
  grocery => grocery.groceryItems
);

export const shopDataSelector = createSelector(
  [groceryStateSelector],
  grocery => grocery.shopData
);

export const totalCostOfGroceriesSelector = createSelector(
  [groceryItemsSelector],
  item => item.reduce((accumulator, { cost, qty }) => accumulator + (cost * qty), 0)
);

const ROUTE_PARAMETER_MAPPING = {
  gear: 1,
  food: 2,
  repair: 3,
  toy: 4,
  survival: 5
}

export const selectorItemType = typeId => createSelector(
  [shopDataSelector],
  item => item.find(data => data.id === ROUTE_PARAMETER_MAPPING[typeId])
);


