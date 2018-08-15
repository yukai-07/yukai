<template>
    <div>
        <h1>犯人信息</h1>
        名字:{{$route.params.name}}
        <br>
        年龄:{{$route.params.age}}
        <br>
        刑期:{{$route.params.date}}
    </div>
</template>
<script>
    export default {
        beforeRouteEnter(to,from,next){
            console.log('进入之前');
            next();
        },
        beforeRouteLeave(to,from,next){
            console.log('离开之前');
            next();
        }
    }
</script>
<style>

</style>