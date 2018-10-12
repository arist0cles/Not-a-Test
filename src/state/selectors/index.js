import { head, pipe, reverse } from 'ramda'

export function getUsers({ users }) {
  return users
}

export function isSorted({ sorted }) {
  return sorted
}

export const getLatestUser = pipe(
  getUsers,
  reverse,
  head
)
