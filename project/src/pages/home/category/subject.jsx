import React, { Component ,createRef} from 'react'
import { SubjectWrap } from './styledCategory'
import { connect } from 'react-redux'

@connect(state => {
    return {
        list: state.category.list,
    }
})
class Subject extends Component {
    constructor(){
        super()
        this.goTop = createRef()
        this.state = {
            flag : false
        }
    }
    goToTop = () =>{
        this.goTop.current.scrollTop = 0
    }
 
    handleOnScroll(){
        let flag = false 
        let dom = this.goTop.current
        if(dom.scrollTop>750)
        {
            flag = true
        }
        this.setState({
            flag
        })
    }

    render() {
        let list = this.props.list.list ? this.props.list.list : []
       
        return (
            <SubjectWrap >
                {
                    list.length && (
                        <div id="subject" 
                        className="subject" 
                        ref={this.goTop}
                        onScrollCapture={() => this.handleOnScroll()}
                        >
                            <div className="label-list clearfix">
                                {
                                    list.map((val, index) => {
                                        return (
                                            <a 
                                            href={"#"+val.cid} 
                                            className="item"
                                            key={val.cid+index}
                                            >{val.name}</a>
                                        )
                                    })
                                }
                            </div>
                            {
                                list.map((val,index)=>{
                                    return(
                                        <dl 
                                        id={val.cid} 
                                        className="subject-item"
                                        key={val.cid}
                                        >
                                        <dt className="item-title">{val.name}</dt>
                                        {
                                            val.list.map((value,i)=>{
                                                return (
                                                    <dd 
                                                    className="item-list"
                                                    key ={value.cid}
                                                    >
                                                        
                                                    <img 
                                                    src={value.imageUrl 
                                                        ?('http://image.qumaiyao.com/'+value.imageUrl)
                                                        :'http://m.ehaoyao.com/_nuxt/img/default_img.b9bf3a9.png'
                                                    } 
                                                    alt="" 
                                                    className="img" 
                                                    />
                                                    <span>{value.name}</span>
                                                    </dd>
                                                )
                                            })
                                        }
                                        </dl>  
                                    )
                                })
                            }
                        </div>
                    )
                }
                {
                    this.state.flag&&(
                        <div className="btn-return-top" onClick={this.goToTop}></div>
                    )
                }
            
            </SubjectWrap>
        )
    }
}
export default Subject