"use client"
interface Action {
  type: string;
}

interface NewMailState {
  isOpen: boolean;
}

const initialState: NewMailState = {
  isOpen: false,
};

const newMailReducer = (state: NewMailState = initialState, action: Action) => {
  switch (action.type) {
    case "OPEN_NEW_MAIL":
      return {
        ...state,
        isOpen: true,
      };
    case "CLOSE_NEW_MAIL":
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default newMailReducer;
