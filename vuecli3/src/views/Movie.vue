<template>
<div>
 <ul>
     <li v-for="m in movieList">
         <router-link :to="'/movieDetail/'+m.name+'/'+m.time">
             {{m.name}}
         </router-link>

     </li>
 </ul>
</div>
</template>
<script>
    export default {
        data(){
           return{
               movieList:[
                   {name:'爱情公寓',time:'100分钟'},
                   {name:'一场好戏',time:'90分钟'}
               ]
           }
        }
    }
</script>
<style>

</style>