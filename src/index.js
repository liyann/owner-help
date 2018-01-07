import React, {Component} from 'react'
import {} from 'react-native'
import {Provider} from 'react-redux'
import configStore from './configStore'

import App from './App'

const store = configStore()

class rootApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}

export default rootApp