import React, { Component } from 'react'
import { ProductsDetailsWrap } from './styledDetails'
import { connect } from 'react-redux'


@connect((state)=> ({data:state.details.data}))
class ProductsDetails extends Component {
    constructor() {
        super()
        this.state = {
            current: 'details'
        }
    }
    handleActive = (block) => {
        this.setState({
            current: block
        })
    }
    render() {
        let {data} = this.props
        return (
            <ProductsDetailsWrap>
                <div className="goods_2" id="productsDetails">
                    <div className="details-nav">
                        <p
                            className={this.state.current === 'details' ? "on" : ""}
                            onClick={() => {
                                this.handleActive('details')
                            }}>商品详情</p>
                        <p
                            className={this.state.current === 'specification' ? "on" : ""}
                            onClick={() => {
                                this.handleActive('specification')
                            }}
                        >规格参数</p>
                    </div>
                    {
                        this.state.current === "details"
                            ? (
                                <div className="details">
                                    <ul><li className="adBannerItem"></li></ul>
                                    <div dangerouslySetInnerHTML={{ __html: data.imageTexts}}>
                                        
                                    </div>
                                </div>
                            )
                            : (
                                <ul className="specification">
                                    {
                                        data.info.map(val =>{
                                            return(
                                                <li 
                                                className="item"
                                                key={val.content}
                                                >
                                                    <span className="title">{val.name}</span>
                                                    <span className="content">{val.content}</span>
                                                </li>
                                            )
                                        })
                                    }
                                    
                                </ul>
                            )
                    }
                </div>
            </ProductsDetailsWrap>
        )
    }
}
export default ProductsDetails
