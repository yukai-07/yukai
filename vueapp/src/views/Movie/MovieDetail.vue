<template>
    <div class="movieDetail" v-if="show">
        <h1>名称:{{movieDetail.title}}</h1>
        <img :src="movieDetail.images.small" alt="">
        <p>id:{{movieDetail.id}}</p>
        <p>简介:{{movieDetail.summary}}</p>
    </div>
</template>
<script>
    import Axios from 'axios';
export default{
    data(){
        return {
            movieDetail:{},
            show:false,
        }
    },
    created(){
        window.onscroll = ()=>{};
        var movieId = this.$route.params.id;
        Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/'+movieId)
            .then((res)=>{
                this.movieDetail =  res.data;
                this.show = true;
        })
    },

}
</script>
<style>
    .movieDetail h1{
        float: left;
    }
</style>