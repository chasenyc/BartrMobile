import { RECEIVE_CURRENT_USER } from '../constants/actionTypes'

const receiveCurrentUser = (current_user) => {
  return { type: RECEIVE_CURRENT_USER, current_user }
}

export const fetchCurrentUser = () => {
  return dispatch => {
    return $.ajax({ url: USERS_URL })
    .then(data => {
      dispatch(receiveCurrentUser(data))
    })
  }
}
