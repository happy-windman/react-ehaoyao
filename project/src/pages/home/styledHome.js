import styled from 'styled-components'

export const HeaderWrap = styled.div`
height: .5rem;
background: #ff344d;
display: flex;
padding: 0 .266667rem;
width: 100%;
height: 1.266667rem;
justify-content: space-between;
align-items: center;
background-color: #ff344d;

img{
    width: .96rem;
    height: 1.146667rem;
}
.search-box{
    display: inline-flex;
    padding-right: 1.146667rem;
    padding-left: .266667rem;
    width: 6.733333rem;
    height: .906667rem;
    border-radius: .133333rem;
    align-items: center;
    background: #fff url('http://m.ehaoyao.com/_nuxt/img/icon-search-index.a6a9235.png') no-repeat 5.866667rem;
    background-size: .6rem .6rem;
    span{
        display: inline-block;
        width: 5.333333rem;
        height: .586667rem;
        line-height: .586667rem;
        font-size: .4rem;
        color: #898989;
        border: 0;
        border-right: 1px solid #d0d0d0;
    }
}
a{
    display: inline-block;
    width: 1.146667rem;
    height: .906667rem;
    line-height: .906667rem;
    font-size: .4rem;
    color: #fff;
    text-align: center;
}
`

export const SeckillBoxWrap = styled.div`
    .seckill-box{
      margin-bottom: .2rem;
      height: 4.533333rem;
      background-color: #fff;
      overflow: hidden;
      .swiper-wrapper{
        white-space:nowrap;
        overflow-x:scroll;
      }
      .title {
        display: flex;
        margin-bottom: .133333rem;
        padding-left: .333333rem;
        padding-right: .213333rem;
        height: 1.133333rem;
        align-items: center;
        .icon-title {
          display: inline-flex;
          margin-right: .4rem;
          flex-grow: 1.533333rem;
          width: 1.533333rem;
          height: .4rem;
          overflow: hidden;
          }
        .title-activity {
          flex: 1;
          padding-right: .533333rem;
          background: url('http://m.ehaoyao.com/_nuxt/img/bg_seckill_more.c7881e8.png') no-repeat 100%;
          background-size: .32rem .32rem;
          text-align: right;
          font-size: .338667rem;
          color: #ff3c54;
          }
      }
      .item {
      
        display:inline-block;
        margin-right: .133333rem;
        width: 2.2rem;
        text-align: center;
        line-height: 0;
        .img {
          display: block;
          margin: 0 auto .106667rem;
          max-width: 1.6rem;
          max-height: 1.6rem;
          text-align: center;
          line-height: 1.6rem;}
        .activity {
          display: inline-flex;
          padding: 0 .2rem;
          height: .4rem;
          background-color: #ff3c54;
          font-size: .266667rem;
          font-weight: 200;
          color: #fff;
          align-items: center;}
        .price {
            margin-top: .106667rem;
            line-height: .466667rem;
            font-size: .396rem;
            color: #ff4040;
            font-weight: 700;}
        .old-price {
          line-height: .4rem;
          font-size: .244rem;
          color: #bebebe;
          text-decoration: line-through;}
        }
    }
`

export const InstrumentBoxWrap = styled.div`
  img {
    width: 100%;
    height: 100%;}
 .instrument-box{
    margin-bottom: .2rem;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
      .title {
        height: 1.04rem;
        line-height: 1.04rem;
        background: url('http://m.ehaoyao.com/_nuxt/img/bg_instrument_title.592fd5a.png') no-repeat 50%/100%;
        text-indent: 0;
        text-align: center;
        font-size: .373333rem;}
      .content{
        padding: 0 .186667rem .106667rem;}
      .top {
          margin-bottom: .106667rem;
          display: flex;
          justify-content: space-between;
          .c-left{
            display: block;
            width: 4.773333rem;
            height: 5.466667rem;
            overflow: hidden;
          }
          .c-right {
          display: inline-flex;
          flex-direction: column;
          justify-content: space-between;
          width: 4.773333rem;
          height: 5.466667rem;
          overflow: hidden;
            .r-img-01 {
            display: block;
            width: 4.773333rem;
            height: 2.666667rem;
            overflow: hidden;
            }
          }
      }
      .list {
        display: flex;
        justify-content: space-between;
        .list-item {
          display: inline-block;
          width: 3.146667rem;
          height: 4.613333rem;
          overflow: hidden;}
      }
 }
`

export const BrandsBoxWrap = styled.div`
.brands-box {
    margin-bottom: .2rem;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    .title {
      height: 1.04rem;
      line-height: 1.04rem;
      text-align: center;
      font-size: .373333rem;}
    .content {
        padding: 0 0 .106667rem;
        line-height: 0;
        .list-item {
        display: inline-flex;
        width: 25%;
        height: 2.506667rem;
        overflow: hidden;
        a {
          display: inline-flex;
          justify-content: space-between;
          width: 100%;
          height: 2.506667rem;
          img {
            width: 100%;
            height: 100%;}
        }
      }
      }
    }
`

export const PromotionBoxWrap = styled.div`
  .promotion-box {
    margin-bottom: .2rem;
    width: 100%;
    height: 5.8rem;
    background-color: #fff;
    overflow: hidden;
    img {
    width: 100%;
    height: 100%;
    }
    .title {
    height: 1.04rem;
    line-height: 1.04rem;
    text-align: center;
    font-size: .373333rem;}
    .content {
    display: flex;
    justify-content: space-between;
    padding: 0 .133333rem;
    height: 4.493333rem;
    .c-left{
    width: 4.8rem;
    height: 4.493333rem;
    overflow: hidden;}
    }
    .c-right {
    width: 4.8rem;
    height: 4.493333rem;
    overflow: hidden;}
    .c-right>a {
    display: block;
    }
    .r-img-01 ,.r-img-02 {

        display: block;
        width: 4.8rem;
        height: 2.213333rem;
        border-radius: .133333rem;
        overflow: hidden;
     }
     .r-img-01{
      margin-bottom: .066667rem;
     }
   
 }
` 

export const GoodBoxWrap = styled.div`
  .goods-box {
    margin-bottom: .2rem;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    .title {
    height: 1.04rem;
    line-height: 1.04rem;
    background: url('http://m.ehaoyao.com/_nuxt/img/bg_goods_title.876e4a9.png') no-repeat 50%/100% 1.04rem;
    text-indent: -13.32rem;
    }
    .content {
    padding-left: .346667rem;
    line-height: 0;
      .list-item {
        display: inline-block;
        margin-right: .333333rem;
        margin-bottom: .293333rem;
        width: 4.493333rem;
        height: 5rem;
        border: 1px solid #dedede;
        background-color: #f7f7f7;
        overflow: hidden;
          .img {
          display: flex;
          width: 4.466667rem;
          height: 3.2rem;
          justify-content: center;
          align-items: center;
          background-color: #fff;
            img {
            display: block;
            width: 3.2rem;
            height: 2.666667rem;
            }
          }
          .p-name {
          display: flex;
          align-items: center;
          margin-top: .16rem;
          padding: 0 .373333rem;
          height: .906667rem;
          line-height: .426667rem;
          color: #4e4e4e;
          font-size: .333333rem;
          overflow: hidden;
            span {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            vertical-align: text-bottom;
            overflow: hidden;
            }
          }
          .p-price {
          padding-left: .293333rem;
          height: .533333rem;
          line-height: .533333rem;
          font-size: .434667rem;
          font-weight: 700;
          color: #ff3c54;
          overflow: hidden;
          }
      }
    }
}
`

export const BottomBoxWrap = styled.div`
  .bottom-box {
    margin: 0 auto;
    width: 9.333333rem;
    img {
    width: 100%;
    height: 100%;
    }
    .img-aboutus {
    display: block;
    width: 100%;
    }
    .btn-list {
    display: flex;
    height: .96rem;
    line-height: .96rem;
    justify-content: center;
    font-size: .296267rem;
    color: #898989;
    overflow: hidden;
      .btn-list>span {
      padding: 0 .266667rem;
      }
    }
    .img-consult-telephone {
    display: block;
    width: 100%;
    }
    .copyright {
    margin-bottom: .266667rem;
    line-height: .933333rem;
    text-align: center;
    font-size: .277733rem;
    color: #898989;
    }
}

`