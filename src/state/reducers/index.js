import { isNonEmptyString } from 'ramda-adjunct'

import { initialState, USER_REGISTERED, ALPHA_CLICKED } from '../constants'

export default function rootReducer(
  state = initialState,
  { type, payload = {} }
) {
  switch (type) {
    case USER_REGISTERED:
      return payload.user && isNonEmptyString(payload.user)
        ? {
            ...state,
            users: [...state.users, payload.user]
          }
        : state
    case ALPHA_CLICKED:
      return {
        ...state,
        sorted: !state.sorted
      }
    default:
      return state
  }
  return state
}
