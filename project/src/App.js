import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'

import Layouts from 'pages/layouts.jsx'

export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Layouts></Layouts>
          </Router>
        </Provider>
      </>
    )
  }
}



