import React, { Component } from 'react'
import EndTime from 'components/endTime/endTime'
import SeckillBoxItem from './seckillBox-item'
import {SeckillBoxWrap} from './styledHome'
import {get} from '../../utils/http'
export default class SeckillBox extends Component {
    constructor(){
        super()
        this.state={
            list:[],
            endTime:null
        };
    }
    async componentDidMount(){  
        let result = await get({
            url:'/api/mds/api/app/apiv3_0/getBuyingGoodsMSite.json',
            params:{
                coonType: '5',
                cityId: '027'
            }
        })
        let time = result.data.purchaseEndTime
 
        this.setState({
            list:result.data.homepageActivityList,
            endTime:time
        })      
    }
    render() {
        return (
            <SeckillBoxWrap>
                <div className="seckill-box">
                    <div className="title">
                        <img src="http://m.ehaoyao.com/_nuxt/img/bg_seckill_title.8980e05.png" alt="限时抢购" className="icon-title" />
                        <div className="countdown-wrapper seckill-container time-box">
                            剩余 
                            {
                                this.state.endTime&&<EndTime endTime={this.state.endTime}></EndTime>
                            }
                        </div>
                        <div className="title-activity">更多<span className="icon-entry-activity"></span>
                        </div>
                    </div>
                    <ul className="swiper-wrapper">
                    {
                        this.state.list.map((val,index)=>{
                            return (
                                <SeckillBoxItem
                                key={val.goodsId}
                                value={val}
                                ></SeckillBoxItem>
                            )
                        })
                    }
                    
                    </ul>
                </div> 
            </SeckillBoxWrap>
        )
    }
}
