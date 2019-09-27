import React from 'react'
import { connect } from 'react-redux'
import getChannels from '../../store/actions/channels'
import ChannelsList from './ChannelsList'


class ChannelsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentWillMount() {
    this.props.getChannels()
  }

  render() {
    return (
      <div>
        {/* {
          !this.props.loading &&
          <ChannelsList channels={this.props.channels}/>
        }
        {
          this.props.loading &&
          <p className="text-center">Loading channels...</p>
        } */}
        {
          !this.props.loading
            ? <ChannelsList channels={this.props.channels} />
            : <p className="text-center">Loading channels...</p>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  channels: state.channels.data,
  loading: state.channels.loading
})

const mapDispatchToProps = dispatch => ({
  getChannels: () => {
    dispatch(getChannels())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsContainer)
