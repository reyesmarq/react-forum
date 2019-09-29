import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { getThread } from '../../store/actions/threads'
import { getReplies } from '../../store/actions/replies'

import SingleThread from './SingleThread'
import { strictEqual } from 'assert'
import Loader from '../../components/Loader'

class ThreadContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { id } = this.props.match.params
    this.props.getThread(id)
    this.props.getReplies(id)
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
  loading: state.thread.loading,
  loadingReplies: state.thread.loading,
  replies: state.thread.replies
})

const mapDispatchToProps = (dispatch) => ({
  getThread: (id) => {
    dispatch(getThread(id))
  },
  getReplies: (id) => {
    dispatch(getReplies(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ThreadContainer)