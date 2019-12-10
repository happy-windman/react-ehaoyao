import React from 'react'
import { Carousel } from 'antd-mobile';
import { connect } from 'react-redux'

import {GETLIST} from 'pages/home/action-types'

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

    imgHeight: 176,
  }
  componentDidMount() { 
    this.props.loadData()
  }
  render() {
    console.log(1)
    let picList = this.props.list[0] ? this.props.list[0].gallery : []
    return (
        <Carousel
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
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
  
    );
  }
}



export default connect(mapState,mapDispatch)(Swiper)