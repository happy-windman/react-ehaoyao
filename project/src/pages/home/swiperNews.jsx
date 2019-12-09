import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
export default class SwiperNews extends Component {
  render() {
    return (
      <>
        <div className='recommend-box'>
            <div className='newsWrap'>
                <WingBlank>
                    <Carousel className="my-carousel"
                    vertical
                    dots={false}
                    dragging={false}
                    swiping={false}
                    autoplay
                    infinite
                    >
                    <div className="v-item">carousel 1</div>
                    <div className="v-item">carousel 2</div>
                    <div className="v-item">carousel 3</div>
                    </Carousel>
                </WingBlank>
            </div>
               
            <span className="icon-more"></span>
        </div>
      </>
    )
  }
}
