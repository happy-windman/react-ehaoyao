import React, { Component } from 'react'
import HeaderWrap from './header'
import Container from './container'
export default class Category extends Component {
  render() {
    return (
      <>
        <HeaderWrap history={this.props.history}></HeaderWrap>
        <Container></Container>
      </>
    )
  }
}
