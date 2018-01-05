import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isPending, hasFailed } from 'redux-saga-thunk'
import { fromEntities, fromResource } from 'store/selectors'
import { resourceDetailReadRequest } from 'store/actions'

import { DetailList } from 'components'

class DetailListContainer extends Component {
  static propTypes = {
    details: PropTypes.object,
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
    const { details, loading, failed } = this.props
    return <DetailList {...{ details, loading, failed }} />
  }
}

const mapStateToProps = state => ({
  details: fromEntities.getDetail(state, 'detail', fromResource.getDetail(state, 'detail')),
  loading: isPending(state, 'detailDetailRead'),
  failed: hasFailed(state, 'detailDetailRead'),
})

const mapDispatchToProps = dispatch => ({
  readDetails: () => dispatch(resourceDetailReadRequest('detail')),
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailListContainer)
