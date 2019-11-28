import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'localforage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {moviesCategories} from './helpers'
import {PERSISTANCE_KEY} from './constants'

const persistConfig = {
  key: PERSISTANCE_KEY,
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['isPlaying']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const initialState = {
    movies: [],
    moviesCats: moviesCategories,
    searchQ: '',
    favorites: [],
    viewingHistory: [],
    current: null,
    isPlaying:false,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  let store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)))
  let persistor = persistStore(store)
  return { store, persistor }
}