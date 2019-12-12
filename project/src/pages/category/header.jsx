import React, { Component } from 'react'
import { HeaderWrap } from './styledCategory'
export default class Header extends Component {
    render() {
        return (
            <HeaderWrap>
                <div className="goback"></div>
                <div className="main">
                    <div className="search-wrapper">
                        <a href="/search.html" className="search-alink">
                            <span className="searchTip">请输入药品名称或症状</span>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <span></span>
                </div>
            </HeaderWrap>
        )
    }
}
