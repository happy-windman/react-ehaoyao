import styled from 'styled-components'

export const HeaderWrap = styled.header`
display: flex;
width: 10rem;
height: 1.173333rem;
background-color: #ff344d;
align-items: center;
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
    .search-wrapper {
        display: flex;
        padding: 0 .866667rem;
        width: 90%;
        height: .773333rem;
        border-radius: .066667rem;
        text-align: center;
        background: #fff url(/_nuxt/img/icon-search.35ffc25.png) no-repeat .173333rem;
        background-size: .533333rem .4rem;
        .search-alink {
            display: inline-block;
            width: 100%;
            height: .773333rem;
            text-decoration: none;
            .searchTip {
                display: block;
                flex: 1;
                height: .773333rem;
                line-height: .773333rem;
                color: #898989;
                border: 0;
                font-size: .373333rem;
                background-color: #fff;
                text-align: left;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }
}
`

export const ContainerWrap = styled.div`

    position: absolute;
    width: 100%;
    top: 1.2rem;
    bottom: 1.2rem;
    display: flex;
    height: 100%;
    font-weight: 300;

`

export const PrimaryWrap = styled.div`
flex: 0 0 2.226667rem;
width: 2.226667rem;
background-color: #f0f2f5;
overflow-y: auto;
    .primary-item {
    padding: 0 .133333rem;
    width: 100%;
    height: 1.32rem;
    line-height: 1.32rem;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .32rem;
    font-weight: 400;
    border-left: .093333rem solid #f0f2f5;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    color: #181818;
    cursor: pointer;
    overflow: hidden;
    &.active {
    background-color: #fff;
    border-right-color: #fff;
    border-left-color: #ff344d;
    color: #ff344d;
}
}
`

export const SubjectWrap = styled.div`
.subject {
    padding-bottom:2rem;
    padding-top: .133333rem;
    width: 7.733333rem;
    background-color: #fff;
    font-size: 0;
    height:100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}
.label-list {
    padding-left: .133333rem;
    .item {
        float: left;
        margin-right: .2rem;
        margin-bottom: .2rem;
        padding: 0 .133333rem;
        width: 1.68rem;
        height: .96rem;
        line-height: .96rem;
        font-size: .32rem;
        color: #898989;
        border: 1px solid #a4a4a4;
        border-radius: .133333rem;
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        box-sizing: border-box;
        overflow: hidden;
    }
}

.clearfix, .clearfix:after, .clearfix:before {
    content: "";
    clear: both;
    display: block;
}
.subject-item {
    margin-bottom: .133333rem;
    padding-top: .2rem;
    .item-title {
        height: .8rem;
        line-height: .8rem;
        font-size: .373333rem;
        color: #898989;
        text-align: center;
        &::before {
            display: inline-block;
            margin-top: -1px;
            height: 1px;
            width: .8rem;
            content: "";
            border-bottom: 1px solid #e5e5e5;
            vertical-align: middle;
        }
        &::after {
            display: inline-block;
            margin-top: -1px;
            height: 1px;
            width: .8rem;
            content: "";
            border-bottom: 1px solid #e5e5e5;
            vertical-align: middle;
        }
    }
    .item-list {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        padding-top: .133333rem;
        width: 2.573333rem;
        height: 2.64rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .32rem;
        color: #4e4e4e;
        text-align: center;
        border-radius: .066667rem;
        cursor: pointer;
        overflow: hidden;
        .img {
            display: block;
            margin: 0 auto .133333rem;
            width: 1.6rem;
            height: 1.466667rem;
        }
    }
}
.btn-return-top {
    position: absolute;
    right: .333333rem;
    bottom: 4.266667rem;
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    border-radius: 50%;
    background: url('http://m.ehaoyao.com/_nuxt/img/btn-return-top.68c3e70.png') 50%/.8rem no-repeat;
    z-index: 999;
}
`