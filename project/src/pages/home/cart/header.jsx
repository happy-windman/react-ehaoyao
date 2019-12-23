import React,{}from 'react'
import {HeaderWrap,LoginBarWrap} from './styledCart'


export default function Header (props){
  
console.log(props)
    return (
      
      
      <>
      <HeaderWrap>
          <div className="goback" onClick={props.history.goBack}></div>
          <div className="main">
            <div className="main-title">
              <ul className="menu-tab">
                <li className={`tab-item  ${props.type==='OTC' ? 'on' : ''}`} onClick={()=>{props.typeChange('OTC')}}>购物车<i>{props.list['OTC'].length}</i></li>
                <li className={`tab-item  ${props.type==='RX' ? 'on' : ''}`} onClick={()=>{props.typeChange('RX')}}>需求清单<i>{props.list['RX'].length}</i></li>
              </ul>
            </div>
          </div>
          <div className="right"><span className="operateBtn" onClick={props.handleEdit}>
            {
              props.edit ?'完成':'编辑'
            }
            </span>
          </div>
      </HeaderWrap>

      <LoginBarWrap><span>登录后可同步电脑与手机购物车中的商品</span><span className="login_btn">登录</span></LoginBarWrap>
      </>
    )
  
}
