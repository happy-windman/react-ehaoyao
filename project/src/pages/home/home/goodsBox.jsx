import React, { Component } from 'react'
import { GoodBoxWrap } from './styledHome'
import {Link} from 'react-router-dom'
export default class GoodsBox extends Component {
 

    render() {
        let data = this.props.data ? this.props.data : []
        return (
            <GoodBoxWrap>
                <div className="goods-box"><div className="title">好货推荐</div>
                    <ul className="content">
                        {
                            data.map((val, index) => {
                                return (
                                    <li 
                                    className="list-item"
                                    key={val.id}
                                    >   
                                    <Link to={`/details/${/\d+/g.exec(val.linkUrl)[0]}`}>
                                        <div  className="img">
                                            <img src={val.imageUrl} alt="" />
                                        </div>
                                        <p className="p-name"><span>{val.name}</span></p>
                                        <p className="p-price">￥{val.price}</p>
                                    </Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </GoodBoxWrap>
        )
    }
}
