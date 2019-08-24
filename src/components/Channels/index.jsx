import React from 'react'
import { connect } from 'react-redux'

const Channels = ({ channels }) => (
  <ul className="list-group">
    <li className="list-group-item">
      Laravel
    </li>
    <li className="list-group-item">
      Angular
    </li>
    <li className="list-group-item">
      Vuejs
    </li>
    <li className="list-group-item">
      Web development
    </li>
  </ul>
)

const mapStateToProps = state => ({
  channels: state.channels
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps)(Channels)
