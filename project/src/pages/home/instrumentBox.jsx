import React, { Component } from 'react'
import {InstrumentBoxWrap} from './styledHome'
export default class InstrumentBox extends Component {
    render() {
        return (
            <InstrumentBoxWrap>
                <div className="instrument-box">
                    <div className="title">精品专区</div>
                    <div className="content">
                        <div className="top">
                            <a href="http://m.ehaoyao.com/specials/100032.html" className="c-left">
                                <img alt='' src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/12/6/1575624207012_34.jpg" className="l-img-01" /></a>
                            <div className="c-right">
                                <a href="http://m.ehaoyao.com/product-33084.html">
                                    <img alt='' src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/12/6/1575624160020_67.jpg" className="r-img-01" /></a>
                                <a href="http://m.ehaoyao.com/specials/100024.html">
                                    <img src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/12/6/1575624235353_89.jpg" className="r-img-02" alt=''/></a>
                            </div>
                        </div>
                        <ul className="list">
                            <li className="list-item">
                                <a href="http://m.ehaoyao.com/product-9491.html">
                                    <img alt='' src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/12/6/1575624291908_20.jpg" />
                                </a>
                            </li>
                            <li className="list-item">
                                <a href="http://m.ehaoyao.com/product-39514.html">
                                    <img alt='' src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/12/6/1575624322278_84.jpg" />
                                </a>
                            </li>
                            <li className="list-item">
                                <a href="http://m.ehaoyao.com/product-16714.html">
                                    <img alt='' src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/12/6/1575624366830_41.jpg" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </InstrumentBoxWrap>
        )
    }
}
