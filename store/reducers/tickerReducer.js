import immutable from "immutability-helper";
import {
  SET_ALL_TICKER
} from "../action/ticker";

const initialState = {
  coins: []
};

const TickerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_TICKER:
      return immutable(state, { coins: { $set: action.payload } });
    default:
      return state;
  }
};

export default TickerReducer;
