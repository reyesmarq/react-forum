import { combineReducers } from "redux"

import threadsReducer from './threads'
import channelsReducer from './channels' 
import threadReducer from "./thread"

const reducer = combineReducers({
  threads: threadsReducer,
  channels: channelsReducer,
  thread: threadReducer,
})

export default reducer