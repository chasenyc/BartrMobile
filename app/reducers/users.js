import { RECEIVE_CURRENT_USER } from "../constants/actionTypes"

export default function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      console.log('users got it')
      debugger;
      return "test"
    default:
      return state
  }
}
