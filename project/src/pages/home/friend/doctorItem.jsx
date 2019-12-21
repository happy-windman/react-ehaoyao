import React, { Component } from 'react'
import {DoctorItemWrap} from './styledFriend'
export default class DoctorItem extends Component {
  render() {
      let item=this.props.item
    return (
      <DoctorItemWrap>
      
                        <div className="img">
                            <img src={item.imgPath}alt=""/>
                        </div>
                        <div className="info">
                            <div className="named">{item.doctorName}<span>{item.title}</span></div>
                            <p className="aptitudesNo">资质编号 {item.code}</p>
                                <div className="labels"><span>{item.specialty}</span>
                            </div>
                        </div>
                        <div className="opt"><span className="btn_askNow">立即咨询</span>
                        </div>
            
      </DoctorItemWrap>
    )
  }
}
