import { INCREASE_QUANTITY, DECREASE_QUANTITY } from './types';

export const productQuantity = (action, name) => {
  return (dispatch) => {
    console.log('action', action)
    console.log('name', name)
    dispatch({
      type: action === 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: name
    })
  }
}