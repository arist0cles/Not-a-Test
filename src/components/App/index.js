import { mapIndexed } from 'ramda-adjunct'
import { sort } from 'ramda'
import React from 'react'

export default function App({
  handleOnSubmit,
  latestUser,
  users,
  handleAlphaClick,
  isSorted
}) {
  const comparator = (a, b) => {
    if (a < b) {
      return -1
    } else if (a === b) {
      return 0
    } else if (a > b) {
      return 1
    }
  }
  const sortedUsers = sort(comparator, users)

  return (
    <div className="App">
      {/* Welcome message goes here */}
      <h1> Welcome {latestUser} </h1>
      <p>Add your name below to register!</p>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="user" />
        <input type="submit" value="Register user" />
      </form>
      <button onClick={handleAlphaClick}>Sort alpha</button>
      <p>See the list below for everyone else who has registered.</p>
      <ul>
        {mapIndexed(
          (val, idx) => <li key={idx}>{val}</li>,
          isSorted ? sortedUsers : users
        )}
      </ul>
    </div>
  )
}
