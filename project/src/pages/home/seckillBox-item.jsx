import React, { Component } from 'react'

export default class SeckillBoxItem extends Component {

    render() {
        let value = this.props.value
        return (
            <>
                <li className="item">
                    <img src={'http://image.qumaiyao.com/'+value.smallPic} alt="" className="img" />
                    <p className="activity">秒杀</p>
                    <p className="price">¥{value.buyingPrice}</p>
                    <p className="old-price">￥{value.price}</p>
                </li>
            </>
        )
    }
}
