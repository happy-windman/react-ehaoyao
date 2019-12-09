import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import { connect } from 'react-redux'

const mapState = (state)=>{
  console.log(state);
  
  return {
    list:state.list
  }
}

class Swiper extends React.Component {
  state = {
    data: [],
    imgHeight: 176,
  }
  componentDidMount() { 
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['1575249269332_11', '1575249302477_10', '1575249320185_53', '1575249248561_72'],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
          slideWidth={1}
        >
          {this.state.data.map(val => (
            <a
              href="true"
              key={val}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/12/2/${val}.jpg`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}



export default connect(mapState)(Swiper)