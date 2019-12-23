import React, { useState } from 'react'
import { SectionWrap } from './styledCart'
import ProItem from './item'
export default function Section(props) {

    let copyList = JSON.parse(JSON.stringify(props.list))
    let update = props.update
    let checkedCount = 0
    let type = props.type

    const [List, setList] = useState({ list: copyList });
    const [all, setAll] = useState(true)
    const [editAll, setEditAll] = useState(false)

    function handleChecked(pro, index) {
        if (props.edit) {
            copyList[type][index].editChecked = !pro.editChecked
        } else {
            copyList[type][index].checked = !pro.checked
        }
        console.log(copyList);
        
        setList({ list: copyList })
        update(copyList)
        copyList[type].forEach(pro => {
            if (pro.checked === true)
                checkedCount++;
        });
        if (copyList[type].length === checkedCount)
            setAll(all => true)
    }

    function handleAllChecked() {
        if (props.edit) {
            editAll
                ? copyList[type].forEach(pro => {
                    pro.editChecked = false
                })
                : copyList[type].forEach(pro => {
                    pro.editChecked = true
                })
            setEditAll(editAll => !editAll)
        } else {
            all
                ? copyList[type].forEach(pro => {
                    pro.checked = false
                })
                : copyList[type].forEach(pro => {
                    pro.checked = true
                })
            setAll(all => !all)
        }
        setList({ list: copyList })
        update(copyList)
    }

    function handleDelete(index) {
        copyList[type].splice(index, 1)
        setList({ list: copyList })
        update(copyList)
    }

    function handleAdd(pro, index) {
        copyList[type][index].count++
        setList({ list: copyList })
        update(copyList)
    }
    function handleMinus(pro, index) {
        if (pro.count > 1) {
            copyList[type][index].count--
            setList({ list: copyList })
            update(copyList)
        }
    }



    function countChange() {

    }
    return (
        <SectionWrap>
            {
                List.list[type].length !== 0 && (
                    <div className="cart-list">
                        <div className="hd">
                            <div className="title">
                                <div className="left">
                                    {
                                        props.edit
                                            ? (<span
                                                className={`icon-check icon-check-box ${editAll ? 'icon-check-on' : ''}`}
                                                onClick={handleAllChecked}
                                            ></span>)
                                            : (<span
                                                className={`icon-check icon-check-box ${all ? 'icon-check-on' : ''}`}
                                                onClick={handleAllChecked}
                                            ></span>)
                                    }

                                    <span className="pharmacyName"> 好药师商城</span>
                                </div>
                                {
                                    props.edit ? '' : (<span className="freeship">还差¥59.20包邮</span>)
                                }
                            </div>
                            {
                                props.edit ? '' : (<div className="getCoupon" >领券</div>)
                            }

                        </div>
                        <div className="content">
                            <div className="cartList-item">
                                <div activityid="785" className="titleInfo">
                                    <div className="money-off">
                                        <div className="condition icon-pmt-seckill">
                                            <span>活动时间至 12月22日 23:59</span>
                                        </div>
                                    </div>
                                </div>

                                {
                                    List.list[type].map((val, index) => {
                                        return (
                                            <ProItem
                                                item={val}
                                                key={val.goodsId}
                                                index={index}
                                                checked={handleChecked}
                                                delete={handleDelete}
                                                add={handleAdd}
                                                minus={handleMinus}
                                                countChange={countChange}
                                                edit={props.edit}
                                            ></ProItem>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </SectionWrap>
    )

}
