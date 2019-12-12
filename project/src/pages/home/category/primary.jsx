import React, { Component } from 'react'
import { PrimaryWrap } from './styledCategory'
import { get } from 'utils/http'
import { connect } from 'react-redux'
import {UPDATA} from './action-types'


@connect((state)=>{
    return {
        list:state.category.list
      }
},(dispatch)=>{
    return {
        loadData(data){
            dispatch({
                type: UPDATA,
                data,
            })
        }
    }
})
class Primary extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            current: 367
        }
    }
    handleSelect = (val) => {
        this.setState({ current: val.cid })
        this.props.loadData(val)   
    }
    async componentDidMount() {
        let list = await get({
            url: '/api/mds/api/app/apiv2_4/thirdLevelCategorynew.json',
            params: {
                coonType: '5',
                cityId: '027',
            }
        })
        this.setState({
            list: list.data
        })
        this.props.loadData(this.state.list[0])
    }
    render() {
        return (
            <PrimaryWrap>
                <ul>
                    {
                        this.state.list.map((val, index) => (
                            <li className={`primary-item ${this.state.current === val.cid ? 'active' : ''}`}
                                key={val.cid}
                                onClick={()=>{
                                    this.handleSelect(val)
                                }}
                            >{val.name}</li>
                        ))
                    }
                </ul>
            </PrimaryWrap>
        )
    }
}

export default Primary
