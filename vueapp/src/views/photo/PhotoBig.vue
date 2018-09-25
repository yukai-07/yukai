<template>
    <router-link to="/photo">
        <v-touch class="photobig" :style="{'background-image':'url('+images[index].src+')'}"
                 @swipeleft="left" @swiperight="right">

        </v-touch>
    </router-link>

</template>
<script>
    import {mapState} from 'vuex';
    export default {
        data(){
            return {
                index:this.$route.params.index,
            }
        },
        methods:{

            left(){

                this.index++
            },
            right(){
                if (this.index < 0) {
                    alert('已经是第一张了')
                }else {
                    this.index--

                }
            }
        },
        computed:mapState(['images']),
        created(){
            console.log(this.$route.params.index);
        }
    }
</script>
<style lang="scss">
.photobig{
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #000;
    background-position: center;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
}
</style>