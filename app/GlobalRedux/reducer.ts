"use client"
import { Email, EmailActionTypes, FETCH_EMAILS_SUCCESS, OPEN_EMAIL } from './actions';

export interface EmailState {
  emails: Email[];
  openedEmailIndex: number | null;
}

const initialState: EmailState = {
  emails: [],
  openedEmailIndex: null,
};

const emailReducer = (state = initialState, action: EmailActionTypes): EmailState => {
  switch (action.type) {
    case FETCH_EMAILS_SUCCESS:
      return {
        ...state,
        emails: action.payload,
      };
    case OPEN_EMAIL:
      return {
        ...state,
        openedEmailIndex: action.payload,
      };
    default:
      return state;
  }
};

export default emailReducer;
