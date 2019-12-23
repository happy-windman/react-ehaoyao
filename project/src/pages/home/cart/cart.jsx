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
      type: 'OTC',
      edit:false
    }
  }

  handleType=(type)=>{
    this.setState({
      type
    }) 
  }

  handleEdit = ()=>{
    this.setState((prevState, props)=>({
      edit:!prevState.edit 
    }))
  }
   handleEditDelete =()=>{
    let copyList=this.props.cart.cartList
    let type = this.state.type
    copyList[type]=copyList[type].filter(pro=>pro.editChecked===false)

    this.props.update(copyList)
}
  render() {

    return (
      <Layout>
        <Header 
        typeChange={this.handleType} 
        type={this.state.type} 
        list={this.props.cart.cartList} 
        history={this.props.history}
        handleEdit={this.handleEdit}
        edit={this.state.edit}
        ></Header>
        <div className="main">
          <Section
            list={this.props.cart.cartList}
            update={this.props.update}
            type={this.state.type}
            edit={this.state.edit}
          ></Section>
        </div>
        <Footer
          list={this.props.cart.cartList}
          type={this.state.type}
          edit={this.state.edit}
          handleEditDelete={this.handleEditDelete}
        ></Footer>
      </Layout>
    )
  }
}
export default Cart