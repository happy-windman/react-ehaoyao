import React, { Component } from 'react'
import DoctorList from './doctorList'
import Header from './header'
export default class Friend extends Component {
  render() {
    return (
      <>
        <Header history={this.props.history}></Header>
        <DoctorList></DoctorList>
      </>
    )
  }
}
