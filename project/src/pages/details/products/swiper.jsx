import React, { Component } from 'react'
import { SwiperWrap } from './styledDetails'
import { Carousel } from 'antd-mobile';
import { connect } from 'react-redux'

@connect(
    (state) => ({
        data: state.details.data
    })
)
class Swiper extends Component {
    state = {
        imgHeight: 176,
    }
    render() {
        let picArr = this.props.data.bigPic ? this.props.data.bigPic.split(',') : []
  
        return (
            <SwiperWrap>
                {picArr.length ? (
                    <div className="gallery-container" id="product">
                    <div className="icon-label-box">
                        <span className="icon-label-rx"></span>
                    </div>
                    <div className="swiperWrap">
                        <Carousel
                            autoplay={true}
                            infinite
                            slideWidth={'311px'}
                        >  
                            {picArr.map(val => (
                                <img
                                    key={val}
                                    src={val}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
                ) : (  <div className="gallery-container" id="product"></div>)
                }
                
            </SwiperWrap>
        )
    }
}

export default Swiper
