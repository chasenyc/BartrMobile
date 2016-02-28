import { RECEIVE_CURRENT_USER } from '../constants/actionTypes'

const DOMAIN_URL = "http://bartrspace.herokuapp.com/api"

const SESSION_URL = "/session"

const receiveCurrentUser = (current_user) => {
  return { type: RECEIVE_CURRENT_USER, current_user }
}

export const fetchCurrentUser = () => {
  return dispatch => {
    fetch(DOMAIN_URL + SESSION_URL)
      .then((response) => response.json())
      .then((responseText) => {
        dispatch(receiveCurrentUser(responseText));
      })
      .catch((error) => {
        receiveCurrentUser({});
      });
  }
}
