import React, { Component } from 'react'
import { connect } from 'react-redux'

import HomeThreads from './HomeThreads'
import { getThreads } from '../../store/actions/threads'

class HomeContainer extends Component {

  componentWillMount() {
    this.props.getThreads()
  }

  getPageCount = (total, perPage) => {
    return Math.ceil(total / perPage)
  }

  handlePageChange = page => {
    this.props.getThreads(page.selected + 1)
  }

  render() {
    return (
      <>
        {/* {
          !this.props.loading
            ? <HomeThreads
              threads={this.props.threadsData.data}
              handlePageChange={this.handlePageChange}
              pageCount={this.getPageCount(this.props.threadsData.total, this.props.threadsData.per_page)}
            />
            : null
        } */}
        {
          !this.props.loading &&
          <HomeThreads
            threads={this.props.threadsData.data}
            handlePageChange={this.handlePageChange}
            pageCount={this.getPageCount(this.props.threadsData.total, this.props.threadsData.per_page)}
          />
        }
        {
          this.props.loading &&
          <p className="text-center">Loading threads...</p>
        }
      </>
    )
  }
}

const mapStateToProsp = (state) => ({
  threadsData: state.threads,
  loading: state.threads.loading
})

const mapDispatchToProps = (dispatch) => ({
  getThreads: (page) => {
    dispatch(getThreads(page))
  }
})

export default connect(mapStateToProsp, mapDispatchToProps)(HomeContainer)