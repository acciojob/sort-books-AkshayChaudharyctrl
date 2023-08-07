import { FETCH_BOOKS_SUCCESS } from './actions';

const initialState = {
  books: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
