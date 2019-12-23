import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'

import home from 'assets/images/home.png'
import homeActive from 'assets/images/homeActive.png'
import cart from 'assets/images/cart.png'
import cartActive from 'assets/images/cartActive.png'
import my from 'assets/images/my.png'
import category from 'assets/images/category.png'
import categoryActive from 'assets/images/categoryActive.png'
import doc from 'assets/images/doc.png'
import { LayoutWrap } from './layout.js'

import { Home } from './home/'
import { Category } from './category/'
import { Friend } from './friend/'
import { Cart } from './cart/'

import { Switch } from 'react-router-dom'
export default class HomeLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      fullScreen: true, 
    };
  }
componentDidMount(){
 
}

static getDerivedStateFromProps(props,state){

  if(props.location.pathname==='/home/friend')
    return {
      hidden:true
    }
  return {
      hidden:false
  }
  
}
  render() {
    let pathName = this.props.location.pathname
    return (
      <Switch>
      <LayoutWrap>
        <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            // hidden={pathName === '/home/friend'}
            hidden={this.state.hidden}
            prerenderingSiblingsNumber="0"
          >
            <TabBar.Item
              key="Home"
              icon={<div style={{
                width: '1.173333rem',
                height: '1.173333rem',
                background: `url(${home}) center center /  1.173333rem 1.173333rem no-repeat`
              }}
              />
              }
              selectedIcon={<div style={{
                width: '1.173333rem',
                height: '1.173333rem',
                background: `url(${homeActive}) center center /  1.173333rem 1.173333rem no-repeat`
              }}
              />
              }
              selected={pathName === '/home/index'}
              onPress={() => {
                this.props.history.push('/home/index')
              }}
              data-seed="logId"
            >
 
            <Home></Home>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '1.173333rem',
                  height: '1.173333rem',
                  background: `url(${category}) center center /  1.173333rem 1.173333rem no-repeat`
                }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '1.173333rem',
                  height: '1.173333rem',
                  background: `url(${categoryActive}) center center /  1.173333rem 1.173333rem no-repeat`
                }}
                />
              }

              key="category"
              selected={pathName === '/home/category'}
              onPress={() => {
                this.props.history.push('/home/category')
              }}
              data-seed="logId1"
            >
                <Category history={this.props.history}></Category>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  zIndex: '999',
                  marginTop: '-.293333rem',
                  width: '1.173333rem',
                  height: '1.466667rem',
                  background: `url(${doc}) center center /     1.173333rem 1.466667rem no-repeat`
                }}
                />
              }
              selectedIcon={
                <div style={{
                  zIndex: '999',
                  marginTop: '-.293333rem',
                  width: '1.173333rem',
                  height: '1.466667rem',
                  background: `url(${doc}) center center /     1.173333rem 1.466667rem no-repeat`
                }}
                />
              }
              key="Friend"
              selected={pathName === '/home/friend'}
              onPress={() => {
         
                this.props.history.push('/home/friend')
              }}
            >
              <Friend history={this.props.history}></Friend>
            </TabBar.Item>
            <TabBar.Item
              icon={<div style={{
                width: '1.173333rem',
                height: '1.173333rem',
                background: `url(${cart}) center center /  1.173333rem 1.173333rem no-repeat`
              }}
              />}
              selectedIcon={<div style={{
                width: '1.173333rem',
                height: '1.173333rem',
                background: `url(${cartActive}) center center /  1.173333rem 1.173333rem no-repeat`
              }}
              />}

              key="cart"
              selected={pathName === '/home/cart'}
              onPress={() => {
                this.props.history.push('/home/cart')
              }}
            >
              <Cart history={this.props.history}></Cart>
            </TabBar.Item>
            <TabBar.Item
              icon={<div style={{
                width: '1.173333rem',
                height: '1.173333rem',
                background: `url(${my}) center center /  1.173333rem 1.173333rem no-repeat`
              }}
              />}
              selectedIcon={<div style={{
                width: '1.173333rem',
                height: '1.173333rem',
                background: `url(${my}) center center /  1.173333rem 1.173333rem no-repeat`
              }}
              />}

              key="my"
              selected={pathName === '/home/my'}
              onPress={() => {
                this.props.history.push('/home/my')
              }}
            >
              <div>5</div>
            </TabBar.Item>
          </TabBar>
        </div>
      </LayoutWrap>
      </Switch>
    );
  }
}
