import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import blogReducer from './reducers/blogReducer';
import themeReducer from './reducers/themeReducer';

const rootReducer = combineReducers({
  blogs: blogReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
