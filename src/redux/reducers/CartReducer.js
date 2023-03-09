import { ADD_TO_CART, SHOW_CAT } from "../actionTypes/actionTypes";

const initialStatee = {
  cart: [],
  showCart: [],
};

export default function cartReducer(state = initialStatee, action) {
  const existCat = state.cart.find((cat) => cat._id === action.payload._id);
  switch (action.type) {
    case ADD_TO_CART: {
      if (existCat && existCat.qty) {
        const restCat = state.cart.filter((cat) => cat._id !== existCat._id);
        existCat.qty = existCat.qty + 1;

        return {
          ...state,
          cart: [...restCat, action.payload],
        };
      } else {
        console.log("clicked", action.payload);
        const newCat = action.payload;
        newCat.qty = 1;
        return {
          ...state,
          cart: [...state.cart, newCat],
        };
      }
    }

    case SHOW_CAT:
      return {
        ...state,
        showCart: [action.payload],
      };
    default:
      return state;
  }
}
