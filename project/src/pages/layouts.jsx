import React, { Component } from 'react'
import { Route , Switch ,Redirect} from 'react-router-dom'

import HomeLayout from './home/layout.jsx'
import {Home} from './home/home/index'
import { Category } from './home/category/index'
export default class Layouts extends Component {
  render() {
    return (
      <>
      <Switch>
          <Route path="/home" component={HomeLayout}></Route>
          <Redirect from='/' to='/home/index'></Redirect>
      </Switch>
    
      </>
    )
  }
}
