import { ADD_PRODUCT_TO_BASKET, GET_NUMBERS } from "../actions/types";


const initialState = {
  basketContent: 0,
  cartCost: 0,
  products: {
    cueDress1: {
      name: 'Cue Dress 1',
      price: 15,
      amount: 0,
      inCart: false
    },
    cueDress2: {
      name: 'Cue Dress 2',
      price: 12,
      amount: 0,
      inCart: false
    },
    cueDress3: {
      name: 'Cue Dress 3',
      price: 12,
      amount: 0,
      inCart: false
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET:
      let addQuantity = {...state.products[action.payload]}
      addQuantity.amount += 1;
      addQuantity.inCart = true;
      return {
        ...state,
        basketContent: state.basketContent + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: addQuantity
        } 
      }
    case GET_NUMBERS:
      return {
        ...state
      }
    default:
      return state;
  }
}