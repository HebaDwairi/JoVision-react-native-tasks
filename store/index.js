import { createStore } from 'redux';
import textReducer from './textReducer';

const store = createStore(textReducer);

export default store;
