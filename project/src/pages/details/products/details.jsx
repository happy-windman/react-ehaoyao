import React, { Component } from 'react'
import { DetailsWrap } from './styledDetails'
import Header from './header'
import Swiper from './swiper'
import Title from './title'
import SwiperX from './swiperX'
import ProductsDetails from './productsDetails'
import Questions from './questions'
import { get } from 'utils/http'
import { connect } from 'react-redux'
import { LOADDATA } from 'pages/details/action-types'
import Footer from './footer'
@connect((state) => ({
  id: state.details.data.goodsId,

}), (dispatch) => {
  return {
    loadData(id) {
      dispatch({
        type: LOADDATA,
        id,
      })
    },
  }
})
class Details extends Component {
  constructor() {
    super()
    this.state = {
      questions: []
    }
  }
  async componentDidMount() {
    console.log(this.props);
    
    this.props.loadData(this.props.match.params.id)
  }
  componentWillUnmount = () => {
    this.setState = (state, callback) => {
      return;
    };
  }
  async componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevProps.id) {
      let result = await get({
        url: '/api/QAmanager/getQuestAnswerById.json',
        params: {
          productId: this.props.id,
          pharmacyId: '25',
          page: '1',
          rows: '5',
          coonType: '5',
          cityId: '027',
        }
      })
      this.setState({
        questions: result.data
      })
    }
  }

  render() {
    return (
      <DetailsWrap>
        {this.state.questions.length !== 0 ? <Header onOff={true} history={this.props.history}></Header> : <Header onOff={false} history={this.props.history}></Header>}
        <div className="main">
          <Swiper></Swiper>
          <Title questions={this.state.questions}></Title>
          <SwiperX></SwiperX>
          <ProductsDetails></ProductsDetails>
          {this.state.questions.length !== 0 ? <Questions data={this.state.questions}></Questions> : ''}
        </div>
        <Footer></Footer>
      </DetailsWrap>
    )
  }
}

export default Details