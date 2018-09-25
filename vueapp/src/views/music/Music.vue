<template>
    <div class="music">
        <aplayer autoplay :showLrc="true" :music="musicList[0]" :list="musicList" v-if="isShow"></aplayer>
    </div>
</template>
<script>
import Axios from 'axios';
import Aplayer from 'vue-aplayer';
export default {
    data(){
        return {
            musicList:[],
            isShow:false,
        }
    },
    created(){
        Axios.get('/data/musicdata.json')
            .then((res)=>{
               var data = res.data.musicData;
               data.forEach((elem)=>{
                   var obj = {};
                   obj.title = elem.title;
                   obj.src = elem.src;
                   obj.artist = elem.author;
                   obj.pic = elem.musicImgSrc;
                   obj.lrc = 'http://localhost:8081/'+elem.lrc;
                   this.musicList.push(obj)
               });
                this.isShow = true;
            })

    },
    components:{
        Aplayer,
    }
}
</script>
<style lang="scss">

</style>