import { isNonEmptyString } from 'ramda-adjunct'
import { connect } from 'react-redux'

import App from '../../components/App'
import { userRegistered, alphaClicked } from '../../state/actions'
import { getUsers, getLatestUser, isSorted } from '../../state/selectors'

function mapStateToProps(state, props) {
  return {
    users: getUsers(state),
    latestUser: getLatestUser(state),
    isSorted: isSorted(state)
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    handleOnSubmit: e => {
      e.preventDefault()
      const userInput = e.target.elements['user']
      if (isNonEmptyString(userInput.value)) {
        dispatch(userRegistered(userInput.value))
        userInput.value = ''
      }
    },
    handleAlphaClick: e => {
      e.preventDefault()
      dispatch(alphaClicked())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
