import React, { Component } from 'react'
import { HeaderWrap } from './styledDetails'


class Header extends Component {
    render() {
        return (
            <HeaderWrap>
                <div className="goback"></div>
                <div className="main">
                    <div className="nav">
                        <ul className="menu-list">
                            <li className="item active"><a href="#product">商品</a></li>
                            <li className="item"><a href="#productsDetails">详情</a></li>
                            {
                                this.props.onOff ? (<li className="item" ><a href="#questions">问答</a></li>) : ''
                            }
                        </ul>
                        <span className="btn-search"></span>
                    </div>
                </div>
                <div className="right" ><span className="icon-menu"></span></div>
            </HeaderWrap>
        )
    }
}
export default Header
