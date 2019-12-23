import React, { Component } from 'react'
import { FooterWrap } from './styledDetails'
import { connect } from 'react-redux'
import { ADDCART } from 'pages/home/cart/action-types'
import { Link } from 'react-router-dom'
@connect((state) => ({
    data: state.details.data,
    cart: state.cartList
}), (dispatch) => {
    return {
        upload(pro) {
            dispatch({
                type: ADDCART,
                data: pro
            })
        }
    }
})
class Footer extends Component {
    addCart = (type) => {
        let pro = this.props.data.sameSpuGoodsList[0]
        pro.type = type
        this.props.upload(pro)
        alert('添加成功')
    }
    render() {
        console.log(this.props.data.identification);

        return (
            <FooterWrap>
                {
                    this.props.data.identification
                        ? (<ul className="menu-list clearfix">
                            <li className="item item_w nuxt-link-active"><Link to="/home"><span className="icon-home"></span>
                                首页</Link>
                            </li>
                            <li className="item item_w"><span className="icon-contactUs"></span>咨询药师</li>
                            <li className="item item_w"><Link to="/home/cart"><span className="icon-cart">
                                {
                                    this.props.data.identification === 'OTC'
                                        ? (<i className="cart-num">{this.props.cart.cartList['OTC'].length}</i>)
                                        : (<i className="cart-num">{this.props.cart.cartList['RX'].length}</i>)
                                }

                            </span>
                                购物车</Link>
                            </li>
                            {
                                this.props.data.identification === 'OTC'
                                    ? (<><li className="item item-add-cart" onClick={() => { this.addCart('OTC') }}>加入购物车</li><li className="item item-buy-now">立刻购买</li></>)
                                    : (<><li className="item item-add-cart" onClick={() => { this.addCart('RX') }}>加入需求清单</li><li className="item item-buy-now">需求登记</li></>)
                            }
                        </ul>) : ''
                }


            </FooterWrap>
        )
    }
}
export default Footer
