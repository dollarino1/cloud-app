import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import fileReducer from './fileReducer'
import userReducer from './userReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers ({
    users: userReducer,
    files: fileReducer
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))