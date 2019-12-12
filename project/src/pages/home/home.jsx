import React, { Component } from 'react'
import BScroll from 'better-scroll'

import {get} from '../../utils/http'

import Header from './header'
import Swiper from './swiper'
import Grid from './grid'
import PromiseBox from './promiseBox'
import SwiperNews from './swiperNews'
import SeckillBox from './seckillBox'
import InstrumentBox from './instrumentBox'
import BrandsBox from './brandsBox'
import PromotionBox from './promotionBox'
import GoodsBox from './goodsBox'
import BottomBox from './bottomBox'
export default class Home extends Component {
  constructor(){
    super()
    this.state={
      homeData:{}
    }
  }
  async componentDidMount(){
    let result = await get({
      url:'/ajax/homeData'    
    })
    this.setState({
      homeData:result[0]
    }) 
    let bScroll = new BScroll('.main',{
      // preventDefault:false,
      eventPassthrough:'horizontal',
      probeType:2,
      bindToWrapper:true
    })
    bScroll.refresh()
  }
  render() {
    return (
      <div className="homeWrap">
        <Header></Header>
        <div className="main">
          <div>
          <Swiper></Swiper>
          <PromiseBox></PromiseBox>
          <Grid></Grid>
          <SwiperNews></SwiperNews>
          <SeckillBox></SeckillBox>
          <InstrumentBox></InstrumentBox>
          <BrandsBox data={this.state.homeData.brands}></BrandsBox>
          <PromotionBox></PromotionBox>
          <GoodsBox data={this.state.homeData.goods}></GoodsBox>
          <BottomBox></BottomBox>
          </div>
        </div>
      </div>
      
    )
  }
}
