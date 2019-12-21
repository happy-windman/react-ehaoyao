import React from 'react'
import {HeaderWrap,LoginBarWrap} from './styledCart'
export default function Header (props){
  
  

    return (
      <>
      <HeaderWrap>
          <div className="goback"></div>
          <div className="main">
            <div className="main-title">
              <ul className="menu-tab">
              
                <li className={`tab-item  ${props.type==='OTC' ? 'on' : ''}`} onClick={()=>{props.typeChange('OTC')}}>购物车<i></i></li>
                <li className={`tab-item  ${props.type==='RX' ? 'on' : ''}`} onClick={()=>{props.typeChange('RX')}}>需求清单<i></i></li>
              </ul>
            </div>
          </div>
          <div className="right"><span className="operateBtn">编辑</span>
          </div>
      </HeaderWrap>

      <LoginBarWrap><span>登录后可同步电脑与手机购物车中的商品</span><span className="login_btn">登录</span></LoginBarWrap>
      </>
    )
  
}
