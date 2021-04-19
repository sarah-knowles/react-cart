import { ADD_PRODUCT_TO_BASKET } from './types';

export const addBasket = () => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT_TO_BASKET
    })
  }
}