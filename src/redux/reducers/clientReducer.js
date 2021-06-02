import { REGISTER } from '../actions';
import { DELETE } from '../actions';

const INITIAL_STATE = [];

const clientReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REGISTER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default clientReducer;
