import React, { Component } from 'react'
import { Popover, Icon } from 'antd-mobile';
import { HeaderWrap } from './styledFriend'

const Item = Popover.Item;

const myImg = src => <img style={{width:'.4rem',height:".4rem",display:'block'}} src={`http://m.ehaoyao.com/_nuxt/img/headerboxMenu${src}.png`} className="am-icon am-icon-xs" alt="" />;

export default class Header extends Component {
    state = {
        visible: false,
        selected: '',
      };
      onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
          visible: false,
          selected: opt.props.value,
        });
      };
      handleVisibleChange = (visible) => {
        this.setState({
          visible,
        });
      };
    render() {
        return (
            <HeaderWrap>

                <div className="goback"></div>
                <div className="main">
                    <span className="main-title">问药师</span></div>
                <div className="right">
                    <Popover mask
                        overlayClassName="fortest"
                        overlayStyle={{ color: 'currentColor' }}
                        visible={this.state.visible}
                        overlay={[
                            (<Item style={{padding:'0 15px'}} key="4" value="scan" icon={myImg('_1.be423f6')} data-seed="logId">首 页</Item>),
                            (<Item style={{padding:'0 15px'}} key="5" value="special" icon={myImg('_2.8a9e1a2')} >分 类</Item>),
                            (<Item style={{padding:'0 15px'}} key="6" value="button ct" icon={myImg('_3.9c4fc47')}>
                                <span style={{ marginRight: 5 }}>我 的</span>
                            </Item>),
                            (<Item style={{padding:'0 15px'}} key="7" value="button ct" icon={myImg('_4.9bfc51f')}>
                                <span style={{ marginRight: 5 }}>搜 索</span>
                            </Item>),
                        ]}
                        align={{
                            overflow: { adjustY: 0, adjustX: 0 },
                            offset: [-10, 0],
                        }}
                        onVisibleChange={this.handleVisibleChange}
                        onSelect={this.onSelect}
                    >
                        <div style={{
                            height: '100%',
                            padding: '0 15px',
                            marginRight: '-15px',
                            display: 'flex',
                            
                            alignItems: 'center',
                        }}
                        >
                            <Icon type="ellipsis" />
                        </div>
                    </Popover>
                </div>

            </HeaderWrap>
        )
    }
}
