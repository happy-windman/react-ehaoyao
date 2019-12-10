import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from './store/index'

import Layout from 'pages/layout.jsx'

export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Layout></Layout>
        </Provider>
      </>
    )
  }
}



