import styled from 'styled-components'

export const HeaderWrap = styled.div`
    display: flex;
    width: 10rem;
    height: 1.173333rem;
    background-color: #ff344d;
    align-items: center;
    font-family: \\5FAE\8F6F\96C5\9ED1;
    .am-popover-item-icon {
        margin-right: 8px;
        width: 0.4rem !important;
        height: 0.4rem !important;
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
    }
    .main-title {
        width: 100%;
        color: #fff;
        text-align: center;
        font-size: .426667rem;
    }
    .right {
        display:flex;
        justify-items:center;
        position: relative;
        width: 1.6rem;
        height: 100%;
        line-height: 1.173333rem;
        text-align: center;
        font-size: .373333rem;
        color: #fff;
    }
 .item {
    position: relative;
    padding-left: 1.6rem;
    height: 1.16rem;
    line-height: 1.16rem;
    text-align: left;
    color: #000;
    border-bottom: 1px solid #c1c1c1;
    background-repeat: no-repeat;
    background-position: .8rem;
    background-size: .4rem;
    font-size: .373333rem;
    }
`

export const DoctorListWrap = styled.ul`
height:100%;
overflow-y:scroll;
    background-color: #fff;
`

export const DoctorItemWrap = styled.li`
    display: flex;
    padding-top: .4rem;
    padding-left: .333333rem;
    border-bottom: 1px solid #e5e5e5;
    overflow: hidden;
    height:3rem;
    img {
    width: 100%;
    height: 100%;
}
    .img {
        display: block;
        width: 1.626667rem;
        height: 1.626667rem;
        border: 1px solid #e5e5e5;
        border-radius: 50%;
        overflow: hidden;
    }
.info {
    flex: 1;
    padding-left: .333333rem;
    .named {
        height: .6rem;
        font-size: .426667rem;
        color: #181818;
    }
    .named>span {
        padding-left: .2rem;
        font-size: .293333rem;
        color: #898989;
    }
    .aptitudesNo {
        height: .6rem;
        line-height: .6rem;
        font-size: .32rem;
        color: #4e4e4e;
    }
    .labels {
        display: flex;
        height: .666667rem;
        align-items: center;
        span {
            display: inline-block;
            margin-right: .133333rem;
            padding: 0 .093333rem;
            height: .346667rem;
            line-height: .346667rem;
            font-size: .266667rem;
            color: #6282ac;
            background-color: #f4f8ff;
        }
    }
}
    .opt {
        padding-top: .72rem;
        width: 1.733333rem;
        .btn_askNow {
            display: block;
            padding-top: .533333rem;
            height: 1.12rem;
            background: url('http://m.ehaoyao.com/_nuxt/img/bg_askNow.ac21d14.png') no-repeat top/.533333rem .44rem;
            font-size: .293333rem;
            text-align: center;
            color: #ff344d;
        }
    }
`