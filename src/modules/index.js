import { combineReducers } from 'redux';
import app from './app';
import auth from './auth';
import viewer from './viewer';
import products from './products';
import entities from './entities';
import chats from './chats';
import messages from './messages';
import user from './user';

export default combineReducers({
  app,
  viewer,
  auth,
  products,
  entities,
  chats,
  messages,
  user
});
