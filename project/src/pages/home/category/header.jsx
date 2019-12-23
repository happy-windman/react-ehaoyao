import React, { Component } from 'react'
import { HeaderWrap } from './styledCategory'
export default class Header extends Component {
    handleGoBack=()=>{
        console.log(1)
        
    }
    render() {
      
        
        return (
            <HeaderWrap>
                <div className="goback" onClick={this.props.history.goBack}></div>
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
