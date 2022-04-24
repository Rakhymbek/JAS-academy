import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  SET_PRODUCTS,
} from "../actions/shopActions";

const initState = {
  products: [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};
export function shop(state = initState, action) {
  const newState = { ...state };
  switch (action.type) {
    case SET_PRODUCTS:
      newState.products = action.payload;
      break;
    case ADD_TO_BASKET:
      const existedProduct = newState.basket.find(
        (product) => product.product.id === action.payload.id
      );
      if (existedProduct) {
        existedProduct.count++;
        newState.basket = [...newState.basket];
      } else {
        newState.basket = [
          ...newState.basket,
          { product: action.payload, count: 1 },
        ];
      }
      break;
    case REMOVE_FROM_BASKET:
     newState.basket.map((item) => {
         console.log(item.count);
        if (item.product.id === action.payload) {
          if (item.count >= 2) {
              item.count = item.count - 1;
          }else {
              if(item.count === 1) {
                newState.basket = state.basket.filter(
                    (item) => item.product.id !== action.payload
                  );
              }
          }
          
        }
      });
      newState.basket = [...newState.basket];
      break;
    default:
      return state;
  }
  localStorage.setItem("basket", JSON.stringify(newState.basket));
  return newState;
}
