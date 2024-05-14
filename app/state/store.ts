"use client"
import { createStore, combineReducers } from 'redux';
import emailReducer, { EmailState } from '../GlobalRedux/reducer';
import newMailReducer from './reducer/toggleReducer';

export interface RootState {
  emails: EmailState;
}

const rootReducer = combineReducers({
  emails: emailReducer,
  newMail: newMailReducer,
});

const store = createStore(rootReducer);

export default store;

