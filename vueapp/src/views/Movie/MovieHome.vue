<template>
    <div class="movie">
        <ul>
            <MovieList v-for="movie in movieList" :movie="movie" @click.native="movieDetail(movie)"></MovieList>
        </ul>
        <div class="loading" v-show="isShow">
            <img src="../../assets/img/loading.gif" alt="">
        </div>
        <div v-show="isEnd">
            已经是最底了
        </div>
    </div>
</template>
<script>
import Axios from 'axios';
import MovieList from '@/views/Movie/MovieList'
export default{
    data(){
        return {
            movieList:[],
            isShow:false,
            isEnd:false,
        }
    },
    created(){
        //https://bird.ioliu.cn/v1?url=https://www.cnblogs.com/trackingmore/p/7156877.html
        // Axios.get('/movie.json')
        //     .then((res)=>{
        //         var arr = res.data.subjects.slice(this.movieList.length,this.movieList.length+5)
        //         this.movieList = [...this.movieList,...arr];
        //         this.isShow = false;
        //         if (arr.length<5){
        //             this.isEnd = true
        //         }
        //         console.log(this.movieList)
        //     });
        this.getData();
        window.onscroll = ()=>{
            var scrollTop = document.documentElement.scrollTop;
            var scrollHeight = document.documentElement.scrollHeight;
            var clientHeight = document.documentElement.clientHeight;
            if(scrollTop + clientHeight == scrollHeight && !this.isEnd){
                this.isShow = true;
                // setTimeout(()=>{
                //     this.getData();
                // },1000);
                this.getData();
            }
        }
    },

    components:{
        MovieList
    },
    methods:{
        movieDetail(movie){
            this.$router.push('/movie/movie-detail/'+movie.id);
        },
        getData(){
            Axios.get('/movie.json')
                .then((res)=>{
                    var arr = res.data.subjects.slice(this.movieList.length,this.movieList.length+5)
                    this.movieList = [...this.movieList,...arr];
                    this.isShow = false;
                    if (arr.length<5){
                        this.isEnd = true
                    }
                    console.log(this.movieList)
                })
        }
    }
}
</script>
<style lang="scss">
    .loading{
        text-align: center;
    }
</style>