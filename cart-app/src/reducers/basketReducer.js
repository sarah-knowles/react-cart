import { ADD_PRODUCT_TO_BASKET, GET_NUMBERS } from "../actions/types";


const initialState = {
  basketContent: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT_TO_BASKET: 
    return {
      basketContent: this.basketContent + 1
    }
    case GET_NUMBERS:
      return {
        ...state
      }
    default:
      return state;
  }
}