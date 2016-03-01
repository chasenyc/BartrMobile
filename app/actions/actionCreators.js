import { RECEIVE_CURRENT_USER } from '../constants/actionTypes'
import { AsyncStorage } from 'react-native'
// const DOMAIN_URL = "http://bartrspace.herokuapp.com/api"
const DOMAIN_URL = "http://localhost:3000/api"
const SESSION_URL = "/session"
const USERS_URL = "/users"
const SESSION_TOKEN = 'session_token'

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
const myHeaders = new Headers ()
var authToken;
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");
AsyncStorage.getItem('token')
  .then((response) => {
    authToken = response
  } )
  .then(() => {
    myHeaders.append("Authorization", authToken);
  })

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
