import React, { Component } from 'react'
import DoctorItem from './doctorItem'
import { DoctorListWrap } from './styledFriend'
import {get} from 'utils/http'
export default class DoctorList extends Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    async componentDidMount(){
        let result =await  get({
            url:'/api/mds/api/app/apiv3_0/consultDoctor.json',
            params:{
                coonType: '5',
                cityId: '027',
            }
        })
        console.log(result.datas);
        if(result.datas)
            this.setState({
                list:result.datas[0].datas
            })
    }
    render() {
        return (
            <DoctorListWrap>
                {
                    this.state.list.map((val,index)=>{
                        return (
                            <DoctorItem
                            key={val.id}
                            item={val}
                            ></DoctorItem>
                        )
                    })
                }
            </DoctorListWrap>
        )
    }
}
