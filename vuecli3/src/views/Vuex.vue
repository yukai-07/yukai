<template>
    <div>
        <!--<h1>{{$store.state.count}}</h1>-->
        <!--<button @click="$store.state.count++">+</button>-->
        <h1>{{count1}}</h1>
        <!--<h1>{{msg}}</h1>-->
        <!--<button @click="fn">+</button>-->
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('sub')">-</button>



    </div>
</template>
<script>
    import { mapState } from 'vuex'


    export default {
        // computed:{
        //     count(){
        //         return this.$store.state.count;
        //     }
        // }
        computed:mapState({
            count1:state=>state.count
        })
        ,
        // methods:{
        //     fn(){
        //         this.$store.state.count++
        //     }
        // }
    }
</script>
<style>

</style>