import React, { Component } from 'react'
import { Route , Switch ,Redirect} from 'react-router-dom'

import HomeLayout from './home/layout.jsx'
import {Details} from './details/products'

export default class Layouts extends Component {
  render() {
    return (
      <>
      <Switch>
          <Route path="/home" component={HomeLayout}></Route>
          <Route path="/details/:id" component={Details}></Route>
          <Redirect from='/' to='/home/index'></Redirect>
      </Switch>
    
      </>
    )
  }
}
