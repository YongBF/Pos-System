<template>
  <div class="leftNav">
    <ul>
        <li>
            <router-link to="/">
                <i class="iconfont icon-liebiao"></i>
                <div>列表</div>
            </router-link>
        </li>
        <li>
            <router-link to="/favorite">
                <i class="iconfont icon-xiai"></i>
                <div>喜爱</div>
            </router-link>
        </li>
        <li>
            <router-link to="/cart">
                <i class="iconfont icon-tianmaochaoshigouwuche"></i>
                <div>预订</div>
            </router-link>
        </li>
        <li>
            <router-link to="/member">
                <i class="iconfont icon-huiyuanqia"></i>
                <div>会员卡</div>
            </router-link>
        </li>
        <li>
            <router-link to="/me">
                <i class="iconfont icon-wo"></i>
                <div>我的</div>
            </router-link>
        </li>
        <li>
            <router-link to="/feedback">
                <i class="iconfont icon-xiugaioryijian"></i>
                <div>反馈</div>
            </router-link>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
    .leftNav{
        color: #fff;
        font-size: 10px;
        height: 100%;
        background-color: #1d8ce0;
        float: left; 
        width:5%;
    }
    .iconfont{
        font-size: 24px;
    }
    .leftNav ul{
        height: 100%;
        width: 100%;
        padding: 0;
        margin: center;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        flex: 1;
    }
    .leftNav ul li{
        list-style: none;
        text-align: center;
        border-bottom: 1px solid #20a0ff;
        /* padding: 31px 10px 32px 10px; */
        height:16.666666666%;
        width: 100%;
        padding-top: 40%;
    }
    .leftNav ul li:hover{
        background-color: #20a0ff;
    }
    a{
        text-decoration: none;
    }
    a:visited{
        text-decoration: none;
        color: #fff;
    }
    .router-link-active>i{
        color: #fff;
        text-decoration: none;
    }
    .router-link-active>div{
        color:#fff;
        text-decoration: none;
    }
</style>

