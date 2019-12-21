import React from 'react'

export default function ProItem(props){
    console.log(props);
    let item = props.item
    
  

        return (
            <>
                <div className="mainInfo" >
                    <div  className="item">
                        <div className="icon-check-box">
                            <span 
                            className={`icon-check ${item.checked ? 'icon-check-on' : ''}`}
                            onClick={()=>{
                                props.checked(item,props.index)
                                 }
                            }
                            ></span>
                        </div>
                        <div className="img">
                            <img src={item.thumbnailPic} alt={item.name} />
                        </div>
                        <div className="right">
                             <p className="p-name">{item.name}</p>
                            <div className="p-specification">规格: {item.spec}</div>
                            <div className="otherInfo">
                                <div className="priceBox">
                                    <span className="symbol">￥</span>
                                    <span className="price">{item.price*item.count}</span>
                                </div>
                                <div className="numBox">
                                    <div className="operate-num">
                                        <span 
                                        className="btn-minus"
                                        onClick={()=>{
                                            props.minus(item,props.index)
                                        }}
                                        ></span>
                                        <input 
                                        type="number" 
                                        pattern="\d*" 
                                        min="1" 
                                        className="p-num" 
                                        onChange = {props.countChange}
                                        value={item.count}/>
                                        <span 
                                        className="btn-plus"
                                        onClick={()=>{
                                            props.add(item,props.index)
                                             }}
                                        ></span>
                                    </div>
                                </div>
                                <span 
                                className="btn-delete"
                                onClick={()=>{
                                    props.delete(props.index)
                                }}
                                ></span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

