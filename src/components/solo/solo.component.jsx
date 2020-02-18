import React from 'react';
import './solo.styles.scss';

import { connect } from 'react-redux';
import {
  shopDataSelector,
  selectorItemType
} from '../../redux/grocery/grocery.selectors';

const Solo = ({ itemType }) => {
  return (
    <div>
      {itemType ? (
        <div>{`type item data from shopData: "${itemType.type}" `}</div>
      ) : (
        `No Item Found`
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  shopData: shopDataSelector(state),
  itemType: selectorItemType(ownProps.match.params.typeId)(state)
});

export default connect(mapStateToProps)(Solo);

//   localhost:3000/gear
//   type item data from shopData: "gear item"
