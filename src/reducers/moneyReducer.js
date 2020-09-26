import { types } from './../types/types';

const initialState = {
  balance: '',
  movements: [],
};

export const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.dataLoaded:
      return {
        ...state,
        balance: action.payload.balance,
        movements: action.payload.movements,
      };
    case types.addMovement:
      return {
        ...state,
        movements: [action.payload, ...state.movements],
      };
    case types.updateBalance:
      return {
        ...state,
        balance: action.payload,
      };
    case types.moneyLogout:
      return {};
    default:
      return state;
  }
};
