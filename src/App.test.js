import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import Tree from './components/tree';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  users: {
    users: []
  }
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Tree />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
