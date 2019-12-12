import styled from 'styled-components';

export const LayoutWrap = styled.div`
.am-tab-bar-tab-title{
       margin: 0 !important;
}
.am-tab-bar-bar-hidden-bottom{
  bottom:-80px;
}
.am-tabs-pane-wrap {
  overflow:hidden;
}
  .homeWrap{
    display:flex;
    height:100%;
    flex-direction:column;
  }
  .main{
    flex:1;
    overflow:hidden;
  }
  .am-tab-bar-bar{
      height:1.2rem
  }
  .am-wingblank.am-wingblank-lg{
    margin-left: 0;
    margin-right: 0; 
  }

    .am-grid.am-grid-square .am-grid-item .am-grid-item-inner-content .am-grid-icon {
    margin-top: 9px;
    width: 1.2rem !important;
  }

    .promise-box{
      display: flex;
      padding: 0 .4rem;
      height: .933333rem;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      overflow: hidden;
      .item {
      padding-left: .533333rem;
      padding-right: .133333rem;
      line-height: .933333rem;
      font-size: .333333rem;
      color: #4e4e4e;
      background: url('http://m.ehaoyao.com/_nuxt/img/icon-li-yes.218706b.png') no-repeat 0/.426667rem;
      }
    }
    .function-list {
        margin-bottom: .2rem;
        width: 100%;
        background-color: #fff;
        overflow: hidden;
      }
    .recommend-box{
      display:flex;
      margin: 0 auto .2rem;
      padding-left: 2.666667rem;
      width: 9.333333rem;
      height: .96rem;
      line-height: .96rem;
      background: #fff url('http://m.ehaoyao.com/_nuxt/img/bg_recommend_title.08a8d49.png') no-repeat .2rem;
      background-size: 2.2rem .453333rem;
      border-radius: .133333rem;
      overflow: hidden;
      .newsWrap{
        width: 6rem;
        height: .96rem;
      }
      .icon-more {
        display: inline-flex;
        width: .666667rem;
        height: .96rem;
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAiCAYAAABWQVnHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYRJREFUeNrslcsrhFEYh2dcS0RJyUKmlJJSFjaycZ0MInIrycZCFlbf36DvH2DBggUpTU1TQk1DspqykJSyVUqykGvxeU695TbDeWc2lFPPvJv5Pd+Z77znHb/neb5MVpYvw/Uv+A2CHPPhum6QMg3DjuPcp7ODWeiBKLKCdAQDEIdW2EJSqBKw7VtKN2xDs0iKVS8RyR2lDzahCXaQlKhOAckDpR8i0AgxJKWqY0TyRBmCDWgQSZmqD0QyAmtQD7tIylWNhOSZMg4rUCuSClUnimQSFqEG9pBUqloZyQtlCuahWnZSpboLSMzcm4FjCMCySsATzfcWoA7O5N28XaYfwtmUJZiAU9Pu7OjcSiBhcwpjcCLhiy/XOUU4l7IKg3AEbYQvk86DJOE8yrrcjUPoIHyVcqB8CudTwtAFCegkfG3VyjJMIhI+gPbvwh92IOEotMA+hAjfWF1nwkVmiEg4BkGb8PufEJZJZCZSrwwX+6nMmgPzxFHCj5qh6v/7f++vAgwAHayCkFrkBMwAAAAASUVORK5CYII=') no-repeat .133333rem;
        background-size: .213333rem .453333rem;
      }
    }

`;
