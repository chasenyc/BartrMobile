import { RECEIVE_CURRENT_USER } from '../constants/actionTypes'

const receiveCurrentUser = (current_user) => {
  console.log('receiver got it')
  return { type: RECEIVE_CURRENT_USER, current_user }
}

export const fetchCurrentUser = () => {
  console.log('fetch called.')

    fetch('http://www.ciderspot.com/api/ciders')
      .then((response) => response.json())
      .then((responseText) => {
        console.log('response was gotten', responseText)
        receiveCurrentUser(responseText);
      })
      .catch((error) => {
        console.warn(error);
      });

}
