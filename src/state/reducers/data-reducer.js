import {
  CREATE_DATA,
  UPDATE_DATA,
  DELETE_DATA,
} from 'state/actions/data/types';

let id = 0;

export default (state = {}, { type, payload }) => {
  switch(type) {
    case CREATE_DATA:
      return {
        ...state,
        [++id]: { ...payload, id },
      };
    case UPDATE_DATA:
      return {
        ...state,
        [payload.id]: payload.data,
      };
    case DELETE_DATA:
      const newState = { ...state };
      delete newState[payload];

      return newState;
    default:
      return state;
  }
};
