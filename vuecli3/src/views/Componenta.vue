<template>
    <div>
        <h1>ComponentA组件</h1>
        <componentb :msg="msg"></componentb>
        <componentc @xx="fn"></componentc>
        {{msg}}
    </div>
</template>
<script>
    import Componentb from '@/views/Componentb';
    import Componentc from '@/views/Componentc';
    export default{
        data(){
            return{
                msg:0
            }
        },
        components:{
            Componentb,
            Componentc
        },
        methods:{
            fn(a){
                this.msg+=a;

            }
        }
    }
</script>
<style>

</style>