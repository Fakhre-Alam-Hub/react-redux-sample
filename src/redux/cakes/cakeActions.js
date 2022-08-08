import * as cakeTypes from "./cakeTypes";

export const buyCake = (numberOfCake = 1) => {
  return {
    type: cakeTypes.BUY_CAKE,
    payload: numberOfCake
  };
};
