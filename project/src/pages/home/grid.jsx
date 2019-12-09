import React, { Component } from 'react'
import { Grid } from 'antd-mobile';
const gridData =[
    {
        icon: 'https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/14/1573723038508_83.png',
        text: `咨询问诊`,  
    },
    {
        icon: 'https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/14/1573723048594_86.png',
        text: `领券中心`,  
    },
    {
        icon: 'https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/14/1573723118326_90.png',
        text: `医疗器械`,  
    },
    {
        icon: 'https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/14/1573723128014_0.png',
        text: `海外精选`,  
    },
    {
        icon: 'https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/14/1573723136479_57.png',
        text: `中药滋补`,  
    },
    {
        icon: 'https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/14/1573723068674_91.png',
        text: `男性健康`,  
    },
    {
        icon: 'https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/14/1573723080006_14.png',
        text: `女性健康`,  
    },
    {
        icon: 'https://ehaoyao.oss-cn-hangzhou.aliyuncs.com/2019/11/14/1573723088792_28.png',
        text: `营养保健`,  
    },
]
const data = gridData.map((_val, i) => ({
    icon: _val.icon,
    text: _val.text,
  }));
  


export default class grid extends Component {
    render() {
        return (
            <>
                <div className="function-list">
                    <Grid data={data} activeStyle={false} /> 
                </div>
            </>
        )
    }
}
