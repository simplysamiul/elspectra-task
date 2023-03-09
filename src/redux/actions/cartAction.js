import { ADD_TO_CART, SHOW_CAT } from "../actionTypes/actionTypes";

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const showCat = (payload) => {
  return {
    type: SHOW_CAT,
    payload,
  };
};
