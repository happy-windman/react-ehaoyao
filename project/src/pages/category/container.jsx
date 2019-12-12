import React, { Component } from 'react'
import { ContainerWrap } from './styledCategory'
import Primary from './primary'
import Subject from './subject'
export default class Container extends Component {
  render() {
    return (
      <ContainerWrap>
        <Primary></Primary>
        <Subject></Subject>
      </ContainerWrap>
    )
  }
}
