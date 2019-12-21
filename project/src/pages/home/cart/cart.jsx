import React, { Component } from 'react'
import Header from './header'
import Section from './section'
import Footer from './footer'
import { Layout } from './styledCart'
import { connect } from 'react-redux'
import { UPDATE } from 'pages/home/cart/action-types'

@connect(state => {
  return {
    cart: state.cartList
  }
}, dispatch => {
  return {
    update(data) {
      dispatch({
        type: UPDATE,
        data
      })
    }
  }
})
class Cart extends Component {
  constructor() {
    super()
    this.state = {
      type: 'OTC'
    }
  }

  handleType=(type)=>{
    this.setState({
      type
    })
    
  }

  render() {
    console.log(this.props);

    return (
      <Layout>
        <Header typeChange={this.handleType} type={this.state.type}></Header>
        <div className="main">
          <Section
            list={this.props.cart.cartList}
            update={this.props.update}
            type={this.state.type}
          ></Section>
        </div>
        <Footer
          list={this.props.cart.cartList}
          type={this.state.type}
        ></Footer>
      </Layout>
    )
  }
}
export default Cart