<template>
    <div class="photo">
        <ul>
            <li v-for="(img,index) in photoList" @click="changeBig(index)">
                <img :src=img.src alt="">
            </li>
        </ul>

    </div>
</template>
<script>
    import Axios from 'axios'
    import {mapState} from 'vuex';
    export default {
        data(){
            return {
                photoList:[],
            }
        },
        computed:mapState[''],
        created(){
            Axios.get('data/photodata.json')
                .then((res)=>{
                    this.photoList = res.data.photoData;
                    this.$store.state.images = res.data.photoData;
                    console.log(this.$store.state.images);
                });
        },
        methods:{
            changeBig(index){
                // this.$store.state.images = img.src;
                this.$router.push('/photoDetail/'+index);
                console.log(this.$store.state.images);
            }

        }
    }

</script>
<style lang="scss">
    .photo li{
        width: 50%;
        float: left;


    }
</style>