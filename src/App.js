import React from 'react';
import Store from './pages/store/store.component';

import styled from 'styled-components';

import { Route, Switch } from 'react-router-dom';

import Solo from './components/solo/solo.component';

const Text = styled.div`
  color: red;
  font-size: 28px;
  border: ${({ isActive }) => isActive ? '1px solid black' : '3px dotted red'}
`

const App = () => (
  <div>
    <Text isActive>I am a component</Text>
    {/* <Switch>
      <Route exact path="/" component={Store} />
      <Route path='/:typeId' component={Solo} />
    </Switch> */}
  </div>
);

export default App;