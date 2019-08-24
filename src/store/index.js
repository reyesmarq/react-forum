import { createStore } from "redux"

const reducer = (state, action) => {
  if (action.type === 'GET_CHANNELS') {
    return {
      channels: [
        { id: 1, name: 'Angular' },
        { id: 2, name: 'Laravel' },
        { id: 3, name: 'React' },
      ]
    }
  }
  return state
}

const initialState = {
  channels: []
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch({
  type: 'GET_CHANNELS'
})

export default store