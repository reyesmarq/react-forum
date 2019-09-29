import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { getThread } from '../../store/actions/threads'

import SingleThread from './SingleThread'
import { strictEqual } from 'assert'
import Loader from '../../components/Loader'

class ThreadContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getThread(this.props.match.params.id)
  }

  render() {
    return (
      <Fragment>
        {
          !this.props.loading
            ? <SingleThread thread={this.props.thread} /> 
            : <Loader section="thread" />
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  thread: state.thread.data,
  loading: state.thread.loading
})

const mapDispatchToProps = (dispatch) => ({
  getThread: (id) => {
    dispatch(getThread(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ThreadContainer)