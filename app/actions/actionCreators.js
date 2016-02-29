import { RECEIVE_CURRENT_USER } from '../constants/actionTypes'

const DOMAIN_URL = "http://bartrspace.herokuapp.com/api"

const SESSION_URL = "/session"
const USERS_URL = "/users"

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

export const signIn = (credentials) => {
  return dispatch => {
    fetch(DOMAIN_URL + SESSION_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: credentials
      })
    })
      .then((response) => response.json())
      .then((responseText) => {
        dispatch(receiveCurrentUser(responseText));
      })
      .catch((error) => {
        receiveCurrentUser({});
      });
  }
}

export const signUp = (credentials) => {
  console.log(credentials)
  return dispatch => {
    fetch(DOMAIN_URL + USERS_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: credentials
      })
    })
      .then((response) => response.json())
      .then((responseText) => {
        dispatch(receiveCurrentUser(responseText));
      })
      .catch((error) => {
        receiveCurrentUser({});
      });
  }
}
