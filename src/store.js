import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistCombineReducers } from 'redux-persist';
import reducers from './Reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  //middleware.push(logger);
}
const configStore = () => {
  const persistReducer = persistCombineReducers(
    {
      key: 'root',
      storage,
      blacklist: ['network'],
    },
    reducers
  );
  const store = createStore(
    persistReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
//For offline data persistence
//To watch store for any change in state
//And save in asyncstorage
//persistStore(store,{storage:AsyncStorage});
export default configStore;
