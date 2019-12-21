import React, { Component } from 'react'
import DoctorList from './doctorList'
import Header from './header'
export default class Friend extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <DoctorList></DoctorList>
      </>
    )
  }
}
