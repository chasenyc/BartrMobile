import { RECEIVE_CURRENT_USER } from "../constants/actionTypes"
import { AsyncStorage } from 'react-native'

export default function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      if ('session_token' in action.current_user) {
        AsyncStorage.setItem('token', action.current_user.session_token)
      }
      return action.current_user
    default:
      return state
  }
}
