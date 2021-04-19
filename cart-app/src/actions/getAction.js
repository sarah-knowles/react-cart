import { GET_NUMBERS } from './types';

export const getNumbers = () => {
  return (dispatch) => {
    dispatch({
      type: GET_NUMBERS
    })
  }
}