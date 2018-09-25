<template>
    <div class="header" :style="{background:bgColor}">
        <span class="header-home">首页</span>
        <h1 class="header-title">{{title}}</h1>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
        computed:mapState(['bgColor','title'])
}
</script>
<style lang="scss">
    .header{
        width: 100%;
        height: 1rem;
        position: fixed;
        top: 0;
        color: #fff;
        line-height: 1rem;
        background:rgb(33, 150, 243);
        z-index: 1;
    }
    .header-title{
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%,-50%);
     }
    .header-home{
         font-size: 16px;

     }
</style>