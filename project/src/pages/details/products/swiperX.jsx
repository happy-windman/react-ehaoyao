import React, { Component } from 'react'
import { SwiperXWrap } from './styledDetails'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import { connect } from 'react-redux'
import { post } from 'utils/http'

@connect((state) => ({ data: state.details.data }))
class SwiperX extends Component {
    constructor() {
        super()
        this.state = {
            current: 'one',
            currentData: [],
            oneData: [],
            twoData: []
        }
    }
    async componentDidMount() {
        let oneResult = await post({
            url: '/front_api/recommend/detail',
            data: {
                "type": "default",
                "user_id": "zSRp7vut7FKVI2vYVUvqepWw7FBnuuDd",
                "prod_id_list": [864936],
                "make_up": true,
                "count": 9,
                "page_no": 1,
                "page_size": 9,
                "coonType": "5",
                "cityId": "027"
            }
        })
        this.setState({
            currentData: oneResult.data,
            oneData: oneResult.data
        })
        let twoResult = await post({
            url: '/front_api/recommend/detail',
            data: {
                "type": "brand",
                "user_id": "zSRp7vut7FKVI2vYVUvqepWw7FBnuuDd",
                "prod_id_list": [864936],
                "make_up": true,
                "count": 9,
                "page_no": 1,
                "page_size": 9,
                "coonType": "5",
                "cityId": "027"
            }
        })
        this.setState({
            twoData: twoResult.data
        })

        new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: true,
            height: 600,
            loopFillGroupWithBlank: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            observer: true
        });
    }

    componentWillUnmount = () => {
        this.setState = (state, callback) => {
            return;
        };
    }

    handleActive(bar) {
        this.setState({
            current: bar,
        })
        bar === "one"
            ? this.setState((preState) => ({
                currentData: preState.oneData
            }))
            : this.setState((preState) => ({
                currentData: preState.twoData
            }))

    }

    render() {

        return (
            <SwiperXWrap>
                <div className="recommendWrapper">
                    <div className="tabTitle">
                        <span
                            onClick={() => {
                                this.handleActive('one')
                            }}
                            className={this.state.current === "one" ? "tabItem on" : 'tabItem'}
                        >为您推荐</span>
                        <span
                            onClick={() => {
                                this.handleActive('two')
                            }}
                            className={this.state.current === "two" ? "tabItem on" : 'tabItem'}
                        >品牌专区</span>
                    </div>
                    <div className="tabContent">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {
                                    this.state.currentData.map(val => {
                                        return (
                                            <div className="swiper-slide" key={val.goods_id}>
                                                <div className="img"><i className="icon-label-rx"></i>
                                                    <img src={`http://image.qumaiyao.com/` + val.big_pic} alt="" />
                                                </div>
                                                <p className="p-name">{val.name}</p>
                                                <ul className="promotions">
                                                </ul>
                                                <div className="otherInfo">
                                                    <p className="p-price">￥{val.price}</p><span className="btn-cart">+</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }




                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </SwiperXWrap>
        )
    }
}

export default SwiperX
