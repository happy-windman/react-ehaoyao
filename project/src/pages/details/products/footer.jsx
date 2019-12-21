import React, { Component } from 'react'
import { FooterWrap } from './styledDetails'
import { connect } from 'react-redux'
import {ADDCART} from 'pages/home/cart/action-types'
import { Link } from 'react-router-dom'
@connect((state) => ({
    data: state.details.data,
    cart:state.cartList.data
}),(dispatch)=>{
    return {
        upload(pro){
           dispatch({
                type:ADDCART,
                data:pro
            })
        }
    }
})
class Footer extends Component {

    addCart =  (type) => {
            let pro = this.props.data.sameSpuGoodsList[0]
            pro.type = type
            this.props.upload(pro)  
            alert('添加成功')     
    }
    render() {
        console.log(this.props);
        
        return (
            <FooterWrap>
                <ul className="menu-list clearfix">
                    <li className="item item_w nuxt-link-active"><span className="icon-home"></span>首页</li>
                    <li className="item item_w"><span className="icon-contactUs"></span>咨询药师</li>
                    <li className="item item_w"><span className="icon-cart"><i className="cart-num">2</i></span>
                   <Link to="/home/cart">购物车</Link> 
                    </li>
                    {
                        this.props.data.identification === 'OTC'
                            ? (<><li className="item item-add-cart" onClick={()=>{this.addCart('OTC')}}>加入购物车</li><li className="item item-buy-now">立刻购买</li></>)
                            : (<><li className="item item-add-cart" onClick={()=>{this.addCart('RX')}}>加入需求清单</li><li className="item item-buy-now">需求登记</li></>)
                    }
                </ul>

            </FooterWrap>
        )
    }
}
export default Footer
