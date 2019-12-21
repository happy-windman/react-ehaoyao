import React, { Component } from 'react'
import { TitleWrap } from './styledDetails'
import { connect } from 'react-redux'

@connect((state) => ({ data: state.details.data }))
class Title extends Component {
    render() {
        let { data } = this.props
        return (
            <TitleWrap>
                <div className="main-title">
                    <div>
                        <div className="title-left">
                            <span className="price-pre"><i>￥</i>{data.price}.<span className="floatNum">00</span></span>&nbsp;
                            <span className="price-old"><i>￥</i>{data.oldPrice}.00</span>
                        </div>
                    </div>
                    <div className="title-right">
                        <p className="directions"><a href="#productsDetails"><i></i><span>说明书</span></a></p>
                        <div className="collections">
                            <p className="collect"><i className="collection"></i><span>收藏</span></p>
                        </div>
                    </div>
                </div>
                <div className="main-info"><p className="p-name"><span className="name"><span className="label three">商家</span>{data.curryName}</span></p><p className="p-desc">{data.brief}</p></div>
                <div className="spec-info">
                    <span className="title">已选</span>
                    <div className="content">
                        <span>{data.spec}</span>
                    </div>
                </div>
                {

                    <div className="questions-part">
                        <a href="#questions">
                            <div className="title">
                                <h5>常见问题</h5><p>查看全部</p>
                            </div>
                            <div className="content">
                                {
                                    this.props.questions.splice(0,2).map(val => {
                                        return (
                                            <p key={val.id}>
                                                <span>{val.goodsQuestion}</span>
                                                <i></i>
                                            </p>
                                        )
                                    })
                                }

                            </div>

                        </a>
                    </div>


                }


                <div className="pharmacy-box"><span>好药师商城（2-5天送达）</span><span className="red">满79元包邮！</span></div>
                <ul className="promise-box"><li className="item">正品保证</li><li className="item">品质保障</li><li className="item">隐私配送</li></ul>
            </TitleWrap>
        )
    }
}
export default Title