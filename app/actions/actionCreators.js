import { RECEIVE_CURRENT_USER } from '../constants/actionTypes'
import { AsyncStorage } from 'react-native'
// const DOMAIN_URL = "http://bartrspace.herokuapp.com/api"
const DOMAIN_URL = "http://localhost:3000/api"
const SESSION_URL = "/session"
const USERS_URL = "/users"
const SESSION_TOKEN = 'session_token'

const myHeaders = new Headers ()
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");

const receiveCurrentUser = (current_user) => {
  return { type: RECEIVE_CURRENT_USER, current_user }
}

export const fetchCurrentUser = (authToken) => {
  myHeaders.append("Authorization", authToken)
  return dispatch => {
    fetch(DOMAIN_URL + SESSION_URL, {
      headers: myHeaders
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

export const signIn = (credentials) => {

  return dispatch => {
    fetch(DOMAIN_URL + SESSION_URL, {
      method: 'POST',
      headers: myHeaders,
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
