
export const addGrocery = (currentItems, incomingItem) => {
  if (currentItems.find(item => item.id === incomingItem.id)) {
    return currentItems.map(item => {
      if (item.id !== incomingItem.id) {
        return { ...item }
      }
      return { ...item, qty: item.qty + 1 }
    });
  }
  // if not exist, combine with array, with qty as 1
  return [...currentItems, { ...incomingItem, qty: 1 }];
}

export const removeGrocery = (currentItems, itemToRemove) => {
  if (currentItems.find(item => item.id === itemToRemove.id)) {
    let newArray = [];
    for (let item of currentItems) {
      if (item.id !== itemToRemove.id) {
        newArray.push(item);
      } else {
        item.qty -= 1;
        if (item.qty > 0) {
          newArray.push(item);
        }
      }
    }
    return newArray;
  }
  return [...currentItems];
}
