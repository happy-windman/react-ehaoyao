import React, { Component } from 'react'
import {PromotionBoxWrap} from './styledHome'
export default class PromotionBox extends Component {
    render() {
        return (
            <PromotionBoxWrap>
                <div className="promotion-box">
                    <div className="title">品牌活动专区</div>
                    <div className="content">
                        <a href="http://m.ehaoyao.com/special/2019/91237.html" className="c-left">
                            <img src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/8/1573204688884_85.jpg" className="l-img-01" alt=""/>
                        </a>
                        <div className="c-right">
                            <a href="http://m.ehaoyao.com/special/2015/10/89828.html">
                                <img src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/22/1574412441226_68.jpg" className="r-img-01" alt=""/>
                            </a>
                            <a href="http://m.ehaoyao.com/special/2019/90945.html">
                                <img src="https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/12/6/1575623846326_91.jpg" className="r-img-02" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </PromotionBoxWrap>
        )
    }
}
