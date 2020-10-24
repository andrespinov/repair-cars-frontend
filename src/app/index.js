import React from 'react'
import AppRouter from './navigation/AppRouter'
import {Provider} from 'react-redux'
import store from './config/store'
import './App.scss'

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
