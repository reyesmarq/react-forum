import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"

import authReducer from './auth'
import threadsReducer from './threads'
import channelsReducer from './channels' 
import threadReducer from "./thread"

const reducer = combineReducers({
  threads: threadsReducer,
  channels: channelsReducer,
  thread: threadReducer,
  form: formReducer,
  auth: authReducer
})

export default reducer