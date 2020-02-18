import React from 'react';
import './store.styles.scss';

import Inventory from '../../components/inventory/inventory.component';
import Switch from '../../components/switch/switch.component';

const Store = () => (
  <div>
    <Inventory />
    <br />
    <Switch />
  </div>
);

export default Store;
