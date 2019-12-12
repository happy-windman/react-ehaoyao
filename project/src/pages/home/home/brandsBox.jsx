import React, { Component } from 'react'
import { BrandsBoxWrap } from './styledHome'
export default class BrandsBox extends Component {
  render() {
    let data = this.props.data ? this.props.data : []
    return (
      <BrandsBoxWrap>
        <div className="brands-box"><div className="title">品牌旗舰店</div>
          <ul className="content">
            {
              data.map((val, index) => {
                return (
                  <li 
                  className="list-item"
                  key={val.id}
                  >
                    <a href={val.linkUrl}>
                      <img src={val.imageUrl} alt="" />
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </BrandsBoxWrap>
    )
  }
}
