<template>
    <div>
        <h1>犯人信息</h1>
        名字:{{$route.params.name}}
        <br>
        年龄:{{$route.params.age}}
        <br>
        所犯罪行:{{$route.params.date}}
    </div>
</template>
<script>
    export default {

    }
</script>
<style>

</style>