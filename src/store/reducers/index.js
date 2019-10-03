import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"

import threadsReducer from './threads'
import channelsReducer from './channels' 
import threadReducer from "./thread"

const reducer = combineReducers({
  threads: threadsReducer,
  channels: channelsReducer,
  thread: threadReducer,
  form: formReducer
})

export default reducer