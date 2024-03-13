import { Tuple, configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import { thunk } from 'redux-thunk'
import logger from 'redux-logger'


const store = configureStore({
     reducer: rootReducer,
     middleware: () => new Tuple(logger, thunk),
     devTools: process.env.NODE_ENV !== "production",
});

export default store;