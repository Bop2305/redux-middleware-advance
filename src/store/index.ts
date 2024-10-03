import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import authReducer from './auth';
import postReducer from './post.duck';

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(thunk)
  },
})

export default store;