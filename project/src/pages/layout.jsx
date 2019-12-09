import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import Home from './home/home'

import home from 'assets/images/home.png'
import homeActive from 'assets/images/homeActive.png'
import cart from 'assets/images/cart.png'
import cartActive from 'assets/images/cartActive.png'
import my from 'assets/images/my.png'
import category from 'assets/images/category.png'
import categoryActive from 'assets/images/categoryActive.png'
import doc from 'assets/images/doc.png'
import { LayoutWrap } from './layout'


export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'homeTab',
      hidden: false,
      fullScreen: true,
    };

  }



  render() {
    return (
      <LayoutWrap>
        <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
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
              selected={this.state.selectedTab === 'homeTab'}

              onPress={() => {
                this.setState({
                  selectedTab: 'homeTab',
                });
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
              selected={this.state.selectedTab === 'categoryTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'categoryTab',
                });
              }}
              data-seed="logId1"
            >
              <div>2</div>
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  zIndex:'999',
                  marginTop: '-.293333rem',
                  width: '1.173333rem',
                  height: '1.466667rem',
                  background: `url(${doc}) center center /     1.173333rem 1.466667rem no-repeat`
                }}
                />
              }
              selectedIcon={
                <div style={{
                  zIndex:'999',
                  marginTop: '-.293333rem',
                  width: '1.173333rem',
                  height: '1.466667rem',
                  background: `url(${doc}) center center /     1.173333rem 1.466667rem no-repeat`
                }}
                />
              }

              key="Friend"

              selected={this.state.selectedTab === 'friendTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'friendTab',
                });
              }}
            >
              <div>3</div>
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
              selected={this.state.selectedTab === 'cartTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'cartTab',
                });
              }}
            >
              <div>4</div>
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
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab',
                });
              }}
            >
              <div>5</div>
            </TabBar.Item>
          </TabBar>
        </div>
      </LayoutWrap>
    );
  }
}
