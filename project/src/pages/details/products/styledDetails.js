import styled from 'styled-components'

export const DetailsWrap = styled.div`
display:flex;
flex-direction:column;
height:100%;
.main{
    flex:1;
    height:100%;
    overflow: auto;
}
`
export const HeaderWrap = styled.header`
display: flex;
width: 10rem;
height: 1.173333rem;
background-color: #ff344d;
align-items: center;  
a{
    color:#fff;
}
.goback {
    margin-left: .133333rem;
    width: 1.066667rem;
    height: 100%;
    background: url('http://m.ehaoyao.com/_nuxt/img/icon_header_goback.052eff7.png') no-repeat 50%;
    background-size: .533333rem .533333rem;
    cursor: pointer;
} 
.main {
    display: flex;
    margin: 0 auto;
    flex: 1;
    width: 5.6rem;
    height: 1.173333rem;
    line-height: 1.173333rem;
    align-items: center;
    .nav {
        display: flex;
        padding-left: 1.333333rem;
        width: 100%;
        .menu-list {
            display: inline-flex;
            flex: 1;
            justify-content: space-around;
            .item {
                padding: 0 .133333rem;
                height: 1.2rem;
                line-height: 1.2rem;
                font-size: .426667rem;
                color: #fff;
                border-bottom: .08rem solid #ff344d;
                white-space: nowrap;
            }
        }
        .btn-search {
            display: inline-flex;
            width: .933333rem;
            background: url('http://m.ehaoyao.com/_nuxt/img/bg_menu_search.4f2b3d2.png') no-repeat 100%/.48rem;
        }
    }
}
.right{
    position: relative;
    width: 1.6rem;
    height: 100%;
    line-height: 1.173333rem;
    text-align: center;
    font-size: .373333rem;
    color: #fff;
    .icon-menu {
        display: inline-block;
        width: .8rem;
        height: .533333rem;
        vertical-align: middle;
        background: url('http://m.ehaoyao.com/_nuxt/img/icon_header_menu.67f31cc.png') 50%/.8rem .4rem no-repeat;
    }
}
`

export const SwiperWrap = styled.div`
touch-action: none;
.gallery-container {
    position: relative;
    display: flex;
    padding-bottom: .266667rem;
    width: 100%;
    height: 8.853333rem;
    justify-content: center;
    align-items: flex-end;
    background-color: #fff;
    .swiperWrap{
        position: relative;
    width: 7.466667rem;
    height: 7.466667rem;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
   
    z-index: 1;
    }
    .icon-label-box {
        position: absolute;
        width: 1.146667rem;
        height: .746667rem;
        top: .8rem;
        right: .8rem;
        z-index: 2;
    }
    .icon-label-rx{
        display: block;
        width: 1.146667rem;
        height: .746667rem;
        background: url('http://m.ehaoyao.com/_nuxt/img/icon-label-rx.8695798.png') no-repeat 50%/1.146667rem .746667rem;
        z-index: 2;
    }

}
`

export const TitleWrap = styled.div`
.main-title {
    padding: .133333rem .373333rem 0;
    background-color: #fff;
    font-family: arial;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    .title-left {
        width: 7.066667rem;
        overflow: hidden;
            .price-pre {
            line-height: 1.333333rem;
            font-size: .64rem;
            color: #ed4443;
                .price-old {
                margin-left: .133333rem;
                font-size: .346667rem;
                color: #999;
                text-decoration: line-through;
                i {
                font-style: normal;
                font-size: .266667rem;
                }
            }
        }
    }
    .title-right {
        display: flex;
        text-align: center;
        margin-top: .266667rem;
        .directions {
         width: 1.333333rem;
            a{
                color:#000;
            }
            i {
                display: block;
                height: .52rem;
                width: 1.333333rem;
                background: url('http://m.ehaoyao.com/_nuxt/img/icon_btn_directions.6bb6111.png') no-repeat 50%;
                background-size: .44rem .52rem;
            }
            span {
                display: block;
                margin-top: .066667rem;
                font-size: .266667rem;
                line-height: .4rem;
            }
        }
        .collect {
            width: 1.066667rem;
            .collection {
                display: block;
                height: .52rem;
                width: 1.066667rem;
                background: url('http://m.ehaoyao.com/_nuxt/img/icon_btn_collect.ebdd2c6.png') no-repeat 50%;
                background-size: .52rem .52rem;
            }
            span {
                display: block;
                margin-top: .066667rem;
                font-size: .266667rem;
                line-height: .4rem;
            }
        }
    }
}
.main-info {
    padding-top: .133333rem;
    padding-bottom: .2rem;
    background-color: #fff;
    .p-name {
        display: flex;
        align-items: center;
        padding: 0 .32rem;
        width: 100%;
        line-height: .64rem;
        font-size: .426667rem;
        color: #181818;
        overflow: hidden;
        .name {
            display: inline-block;
            flex: 1;
            line-height: .64rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            .label {
                margin-right: .133333rem;
                display: inline-block;
                width: .72rem;
                height: .4rem;
                color: #fff;
                text-align: center;
                border-radius: .066667rem;
                text-indent: -133.32rem;
                vertical-align: middle;
                background: url('http://m.ehaoyao.com/_nuxt/img/icon_label_isSelf.ba79718.png') no-repeat 50%/.72rem .4rem;
                overflow: hidden;
            }
            .three {
                background-image: url('http://m.ehaoyao.com/_nuxt/img/icon_label_three.cb3c1ba.png');
            }
        }
    }
    .p-desc {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        margin-top: .133333rem;
        padding: 0 .32rem;
        max-height: 1.4rem;
        line-height: .533333rem;
        font-size: .346667rem;
        color: #898989;
        background-color: #fff;
        overflow: hidden;
    }
}
.spec-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: .24rem 0;
    padding: 0 .32rem;
    height: 1rem;
    background-color: #fff;
    .title {
    font-size: .32rem;
    color: #828282;
    }
    .content {
        display: inline-flex;
        align-items: center;
        color: #4e4e4e;
    }
    .content>span {
        margin-left: .4rem;
        display: inline-block;
        max-width: 8rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: .32rem;
    }
}
.questions-part {
    margin-bottom: .24rem;
    background-color: #fff;
    a{
        color:#000;
    }
    .title {
        display: flex;
        justify-content: space-between;
        height: 1.133333rem;
        line-height: 1.133333rem;
        border-bottom: .013333rem solid #e5e5e5;
        font-size: .346667rem;
        h5 {
        padding: 0 .373333rem;
     }
        p {
        color: #ff344d;
        padding: 0 1rem;
        background: url('http://m.ehaoyao.com/_nuxt/img/icon_arrow_right.803c0c6.png') no-repeat 2.533333rem;
        background-size: .213333rem .4rem;
     }
    }
    .content {
        padding: .266667rem 0;
        p {
            position: relative;
            padding: 0 .933333rem;
            height: .666667rem;
            line-height: .666667rem;
            font-size: .293333rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #4e4e4e;
            i {
                position: absolute;
                top: .16rem;
                left: .4rem;
                display: inline-block;
                width: .4rem;
                height: .4rem;
                background: url('http://m.ehaoyao.com/_nuxt/img/icon_ask_bg.1ef3386.png') no-repeat 50%;
                background-size: .4rem .4rem;
                color: #fff;
                font-size: .24rem;
                line-height: .346667rem;
                font-style: normal;
                text-align: center;
            }
        }
    }
}
.pharmacy-box {
    display: flex;
    padding: 0 .32rem;
    width: 100%;
    height: 1rem;
    font-size: .346667rem;
    color: #4e4e4e;
    border-bottom: 1px solid #e5e5e5;
    align-items: center;
    background-color: #fff;
    overflow: hidden;
    justify-content: space-between;
    .red {
    margin-left: .533333rem;
    color: #f40940;
    font-size: .346667rem;
}
}
.promise-box {
    display: flex;
    padding: 0 .32rem;
    height: .986667rem;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    overflow: hidden;
    .item {
    padding-left: .533333rem;
    padding-right: .133333rem;
    line-height: .933333rem;
    font-size: .333333rem;
    color: #f40940;
    background: url('http://m.ehaoyao.com/_nuxt/img/icon_li_tips.bcb33f0.png') no-repeat 0/.426667rem;
}
}
`

export const SwiperXWrap = styled.div`
.swiper-container{
    height:6rem;
}
.recommendWrapper {

    margin: .24rem 0;
    background-color: #fff;
    .tabTitle {
        display: flex;
        height: 1.173333rem;
        line-height: 1.173333rem;
        font-size: .373333rem;
        color: #333;
        border-bottom: .013333rem solid #e5e5e5;
        .tabItem {
            position: relative;
            display: inline-flex;
            flex: 1;
            justify-content: center;
            align-items: center;
        }
        .on {
            color: #ff344d;
        }
       .on:after {
            position: absolute;
            content: "";
            margin-left: -.333333rem;
            width: .666667rem;
            height: 0;
            border-bottom: 3px solid #ff344d;
            border-radius: .04rem;
            bottom: 0;
            left: 50%;
        }
    }
    .tabContent {
        padding:0 0.3rem;
        padding-top: .266667rem;
        height: 6.333333rem;
        overflow: hidden;
        .img {
            position: relative;
            width: 2.666667rem;
            height: 2.666667rem;
            overflow: hidden;
        }
        img{
            width:100%;
            height:100%;
        }
        .icon-label-rx {
            position: absolute;
            top: 0;
            right: 0;
            width: .666667rem;
            height: .426667rem;
            background: url('http://m.ehaoyao.com/_nuxt/img/icon-label-rx.8695798.png') no-repeat 50%/.666667rem .426667rem;
        }
        .p-name {
            margin-top: .106667rem;
            height: .64rem;
            line-height: .64rem;
            font-size: .293333rem;
            color: #333;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .promotions {
            display: flex;
            height: .533333rem;
            align-items: center;
            overflow: hidden;
        }
        .otherInfo {
            margin-top: .133333rem;
            display: flex;
            justify-content: space-between;
            overflow: hidden;
        }
        .p-price {
            display: flex;
            flex: 1;
            align-items: center;
            height: .48rem;
            line-height: .48rem;
            text-align: center;
            font-size: .32rem;
            color: #ed4443;
            overflow: hidden;
        }
        .btn-cart {
            display: inline-flex;
            width: .48rem;
            height: .48rem;
            text-indent: -133.32rem;
            background: url('http://m.ehaoyao.com/_nuxt/img/btn-cart.87685f5.png') no-repeat 50%/.48rem;
        }
    }
    
}
`
export const ProductsDetailsWrap = styled.div`
.details-nav {
    width: 100%;
    height: 1.066667rem;
    line-height: 1.066667rem;
    display: flex;
    justify-content: space-between;
    font-size: .346667rem;
    background-color: #fff;
    border-bottom: .013333rem solid #e5e5e5;
   p {
    flex: 0.5;
    text-align: center;
    border-right: .013333rem solid #e5e5e5;
    }
    .on {
    color: #ff344d;
    }
}
.details {
    display: flex;
    flex-direction: column;
    padding-bottom: .266667rem;
    justify-content: center;
    font-size: .32rem;
    overflow: hidden;
    img {
        display: block;
        width: 100%;
        height: auto;
    }
}
.specification {
    margin: 0 auto;
    padding-bottom: .213333rem;
    width: 9.933333rem;
    border-radius: .066667rem;
    .item {
        background-color: #fff;
        display: flex;
        padding: .266667rem .4rem;
        align-items: center;
        font-size: .32rem;
        border-bottom: 1px solid #e5e5e5;

    }
    .title {
        display: inline-flex;
        width: 2.64rem;
        color: #898989;
    }
    .content {
        flex: 1;
        line-height: .453333rem;
    }
}
`

export const QuestionsWrap = styled.ul`
background-color: #fff;
margin-bottom: .213333rem;
.evaluate_title {
    padding-left: .4rem;
    height: 1rem;
    line-height: 1rem;
    border-bottom: .013333rem solid #e5e5e5;
    font-size: .32rem;
    color: #4e4e4e;
    background-color: #fff;
}
li {
    margin: 0 .373333rem;
    padding: .213333rem 0;
    border-bottom: .013333rem solid #e5e5e5;
    h3 {
        position: relative;
        padding-left: .56rem;
        line-height: .48rem;
        font-size: .32rem;
        font-weight: bolder;
        margin-bottom: .186667rem;
        color: #333;
    }
    h3:before {
        position: absolute;
        top: .066667rem;
        left: 0;
        content: "";
        display: inline-block;
        width: .4rem;
        height: .4rem;
        background: url('http://m.ehaoyao.com/_nuxt/img/icon_ask_bg.1ef3386.png') no-repeat 50%;
        background-size: .4rem .4rem;
        color: #fff;
        font-size: .24rem;
        line-height: .346667rem;
        text-align: center;
        font-weight: lighter;
    }
   p {
        position: relative;
        padding-left: .56rem;
        font-size: .293333rem;
    }
    p:before {
        position: absolute;
        top: .066667rem;
        left: 0;
        content: "";
        display: inline-block;
        width: .4rem;
        height: .4rem;
        background: url('http://m.ehaoyao.com/_nuxt/img/icon_ans_bg.935b7b3.png') no-repeat 50%;
        background-size: .4rem .4rem;
        color: #fff;
        font-size: .24rem;
        line-height: .346667rem;
        text-align: center;
        font-weight: lighter;
    }
    .answerContent {
        display: inline-block;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        max-height: 2.4rem;
        line-height: .48rem;
    }
}
.loadOver {
    width: 100%;
    height: 1.333333rem;
    line-height: 1.333333rem;
    text-align: center;
    font-size: .346667rem;
    color: #aaa;
    background-color: #eee;
}
`

export const FooterWrap = styled.footer`
    width: 10rem;
    height: 1.333333rem;
    background-color: #fff;
    
.icon-contactUs, .page-product .product-footer .item .icon-home ,.icon-cart{
    display: block;
    width: .586667rem;
    height: .666667rem;
}
    .clearfix, .clearfix:after, .clearfix:before {
        content: "";
        clear: both;
        display: block;
    }
    ul{
        .item_w {
        width: 16%;
    }
    .icon-home {
            display: block;
            width: .586667rem;
            height: .666667rem;
            background: url('http://m.ehaoyao.com/_nuxt/img/icon_btmenu_home.5f5c60c.png') no-repeat bottom/.586667rem;
        }
        .icon-contactUs {
            background: url('http://m.ehaoyao.com/_nuxt/img/icon_btmenu_consult.dd1fdfd.png') no-repeat bottom/.586667rem;
        }
        .icon-cart {
            position: relative;
            background: url('http://m.ehaoyao.com/_nuxt/img/icon_btmenu_cart.f031545.png') no-repeat bottom/.586667rem;
        }
        .cart-num {
            position: absolute;
            top: -.066667rem;
            left: .4rem;
            padding: 0 .12rem;
            height: .426667rem;
            line-height: .426667rem;
            border-radius: .213333rem;
            background-color: #ff344d;
            border: 1px solid #fff;
            color: #fff;
            font-size: .293333rem;
            font-style: normal;
            text-align: center;
        }
        .item-add-cart {
            width: 26%;
            font-size: .373333rem;
            color: #ff344d;
        }
        .item-buy-now {
            width: 26%;
            background-color: #ff344d;
            color: #fff;
            font-size: .373333rem;
        }
    }
    
    .item {
        float: left;
        display: inline-flex;
        width: 20%;
        height: 1.333333rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: .266667rem;
        color: #999;
        border-right: 1px solid #e5e5e5;
        border-top: 1px solid #e5e5e5;
        cursor: pointer;
        a{
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color:#999;
        }
    }
`