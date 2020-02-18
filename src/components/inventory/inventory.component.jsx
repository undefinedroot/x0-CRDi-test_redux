import React from 'react';
import './inventory.styles.scss';

import { connect } from 'react-redux';

// use these actions in mapDispatchToProps()
import { addGrocery, removeGrocery } from '../../redux/grocery/grocery.actions';

import {
  groceryItemsSelector,
  shopDataSelector,
  totalCostOfGroceriesSelector
} from '../../redux/grocery/grocery.selectors';

import { createStructuredSelector } from 'reselect';

// just build a huge component
class Inventory extends React.Component {
  render() {
    return (
      <div>
        <span>Shop Items, TODO: use reselect</span>
        <div>
          {this.props.shopData.map(item => (
            <div key={item.id}>
              <button
                className={{ display: 'inline' }}
                onClick={() => this.props.addGrocery(item)}
              >
                ADD
              </button>
              <button
                className={{ display: 'inline' }}
                onClick={() => this.props.removeGrocery(item)}
              >
                REMOVE
              </button>
              {`Name: ${item.name} ($${item.cost})`}
            </div>
          ))}
        </div>
        <br />
        <span>Groceries</span>
        {this.props.groceryItems.map(item => (
          <div key={item.id}>
            <div style={{ display: 'inline' }}>
              <strong>Name: </strong>
            </div>
            {`${item.name} x ${item.qty} $(${item.qty * item.cost})`}
          </div>
        ))}
        <hr />
        <div>{`Total Cost: $${this.props.totalCostOfGroceries}`}</div>
      </div>
    );
  }
}

// const mapStateToProps = ({ grocery: { groceryItems, shopData } }) => ({
//   groceryItems,
//   shopData
// });

// NOTE: reselect is only effective if the components are separated from one another
// in this example, the render of each component is still triggered
// whenever a state is changed, therefore, creating a big component is
// not the best way to do things, you need to break it down to small pieces

// const mapStateToProps = state => ({
//   groceryItems: groceryItemsSelector(state),
//   shopData: shopDataSelector(state),
//   totalCostOfGroceries: totalCostOfGroceriesSelector(state)
// });

// alternative, using createStructuredSelector()
// which automatically passes the top level 'state'
const mapStateToProps = createStructuredSelector({
  groceryItems: groceryItemsSelector,
  shopData: shopDataSelector,
  totalCostOfGroceries: totalCostOfGroceriesSelector
});

const mapDispatchToProps = dispatch => ({
  addGrocery: newState => dispatch(addGrocery(newState)),
  removeGrocery: newState => dispatch(removeGrocery(newState))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);
