import React from 'react'
import { FooterWrap } from './styledCart'
export default function Footer(props) {
    let type = props.type
    function allPrice() {
        let result = 0
        let allCount = 0
        props.list[type].forEach(val => {
            if (val.checked) {
                result += val.count * val.price
                allCount++
            }
        })
        return {
            result,
            allCount
        }

    }

    return (
        <FooterWrap>
            <div className="footer-wrapper">
                <div className="totalAmount">
                    <div>合计:<span className="amount">￥{allPrice().result}</span>
                    </div>
                </div>
                <div className="btn-balance">结算({allPrice().allCount})</div>
            </div>
        </FooterWrap>
    )

}
