<template>
    <div>
        <h1>监狱</h1>
        <router-link :to="{name:'test1',params:{name:'李狗冠',age:38,date:'死刑'}}" >犯罪嫌疑人1号</router-link>
        <br>
        <router-link to="/mine/test2/李狗轩/36/强奸">犯罪嫌疑人2号</router-link>
        <router-view/>
    </div>
</template>
<script>

</script>