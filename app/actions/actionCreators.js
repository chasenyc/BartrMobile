import { RECEIVE_CURRENT_USER } from '../constants/actionTypes'

const receiveCurrentUser = (current_user) => {
  return { type: RECEIVE_CURRENT_USER, current_user }
}

export const fetchCurrentUser = () => {
  return dispatch => {
    fetch('http://www.ciderspot.com/api/ciders')
      .then((response) => response.json())
      .then((responseText) => {
        dispatch(receiveCurrentUser(responseText));
      })
      .catch((error) => {
        console.warn(error);
      });
  }
}
