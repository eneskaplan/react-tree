import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import logger from './middleware/logger';
import mapper from './middleware/mapper';
import Reducers from './reducers';

const middlewares = [thunk, mapper, logger];

const store = createStore(Reducers, applyMiddleware(...middlewares));

export default store;
