import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isPending, hasFailed } from 'redux-saga-thunk'
import { fromDetails, fromLogin } from 'store/selectors'
import { loadDetailsRequest } from 'store/actions'

import { DetailList } from 'components'

class DetailListContainer extends Component {
  static propTypes = {
    details: PropTypes.object,
    user: PropTypes.string,
    loading: PropTypes.bool,
    failed: PropTypes.bool,
    readDetails: PropTypes.func.isRequired,
  }

  static defaultProps = {
    user: 'None',
    date: JSON.stringify(new Date()),
  }

  componentWillMount() {
    this.props.readDetails()
  }

  render() {
    const { details, user, loading, failed } = this.props
    return <DetailList {...{ details, user, loading, failed }} />
  }
}

const mapStateToProps = state => ({
  details: fromDetails.getDetails(state),
  user: fromLogin.getUsername(state),
  loading: isPending(state, 'loadDetails'),
  failed: hasFailed(state, 'loadDetails'),
})

const mapDispatchToProps = dispatch => ({
  readDetails: () => dispatch(loadDetailsRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailListContainer)
