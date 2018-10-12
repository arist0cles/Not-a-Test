import { USER_REGISTERED, ALPHA_CLICKED } from '../constants'

export function userRegistered(user) {
  return {
    type: USER_REGISTERED,
    payload: {
      user
    }
  }
}

export function alphaClicked() {
  return {
    type: ALPHA_CLICKED
  }
}
