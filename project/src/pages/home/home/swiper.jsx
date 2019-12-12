import React from 'react'
import { Carousel } from 'antd-mobile';
import { connect } from 'react-redux'
import {SwiperWrap} from './styledHome'
import {GETLIST} from 'pages/home/home/action-types'

const mapState = (state)=>{
  return {
    list:state.home.list
  }
}

const mapDispatch = dispatch =>{
  return {
    loadData(){
      dispatch({
        type:GETLIST
      })
    }
  }
}

class Swiper extends React.Component {
  state = {

  }
  componentDidMount() { 
    this.props.loadData()
  }

  render() {
    let picList = this.props.list[0] ? this.props.list[0].gallery : []
    return (
      <SwiperWrap>
      {
        picList.length&&<Carousel
          autoplay={true}
          infinite
          slideWidth={1}
        >
          {picList.map(val => (
            <a
              href="true"
              key={val}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.imageUrl}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
              />
            </a>
          ))}
          
        </Carousel>
      }
        
    </SwiperWrap>
    );
  }
}



export default connect(mapState,mapDispatch)(Swiper)