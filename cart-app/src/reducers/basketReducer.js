import { ADD_PRODUCT_TO_BASKET, GET_NUMBERS, INCREASE_QUANTITY, DECREASE_QUANTITY } from "../actions/types";


const initialState = {
  basketContent: 0,
  cartCost: 0,
  products: {
    cueDress1: {
      name: 'Cue Dress 1',
      tagName: 'dress1',
      price: 15,
      amount: 0,
      inCart: false
    },
    cueDress2: {
      name: 'Cue Dress 2',
      tagName: 'dress2',
      price: 12,
      amount: 0,
      inCart: false
    },
    cueDress3: {
      name: 'Cue Dress 3',
      tagName: 'dress3',
      price: 12,
      amount: 0,
      inCart: false
    }
  }
}

export default (state = initialState, action) => {
  let productSelected = '';

  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET:
      productSelected = { ...state.products[action.payload]}
      productSelected.amount += 1;
      productSelected.inCart = true;
      console.log(productSelected)
      return {
        ...state,
        basketContent: state.basketContent + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected
        }
      }
    case GET_NUMBERS:
      return {
        ...state
      }
    case INCREASE_QUANTITY:
      productSelected = { ...state.products[action.payload]}
      productSelected.amount += 1;
      return {
        ...state,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected
        }
      }
    case DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload]};
      let newCartCost = 0;
      if (productSelected.amount === 0) {
        productSelected.amount = 0;
        newCartCost = state.cartCost;
      } else {
        productSelected.amount -= 1;
        newCartCost = state.cartCost - state.products[action.payload].price
      }
      return {
        ...state,
        cartCost: newCartCost,
        products: {
          ...state.products,
          [action.payload]: productSelected
        }
      }
    default:
      return state;
  }
}