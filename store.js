import { createStore, combineReducers } from 'redux';
import store from './reducers';
const rootReducer = combineReducers({
  store
});
const configureStore = () => {
  return createStore(rootReducer);
}
export default configureStore;