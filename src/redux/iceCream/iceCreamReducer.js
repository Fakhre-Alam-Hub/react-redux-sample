import * as iceCreamTypes from "./iceCreamTypes";

const initialState = {
  numOfIceCreams: 20
};

export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case iceCreamTypes.BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
