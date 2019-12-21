import React, { Component } from 'react'
import { QuestionsWrap } from './styledDetails'
export default class Questions extends Component {
    render() {
        return (
            <QuestionsWrap>
                <div className="evaluate_title" id="questions">常见问题</div>
                {
                    this.props.data.map(val => {
                        return (
                            <li key={val.id} >
                                <h3 className="ask"><span>{val.goodsQuestion}</span></h3><p className="answer"><span className="answerContent">{val.goodsAnswer}
                                    </span></p>
                            </li>
                        )
                    })
                }

                <div className="loadOver" >已经全部加载完毕</div>
            </QuestionsWrap>
        )
    }
}
