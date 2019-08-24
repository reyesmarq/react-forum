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
    return <ChannelsList channels={this.props.channels}/>
  }
}

const mapStateToProps = state => ({
  channels: state.channels
})

const mapDispatchToProps = dispatch => ({
  getChannels: () => {
    dispatch(getChannels())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsContainer)
