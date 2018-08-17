<template>
    <ul class="footer" :style="{background:bgColor}">
        <li v-for="menu in menuList">
            <router-link :to="menu.path" @click.native="changeBg(menu)">{{menu.name}}</router-link>
        </li>

    </ul>
</template>
<script>
    import {mapState} from 'vuex';
export default {
    props:['menuList'],
    data(){
      return  {
      }
    },
    methods:{
        changeBg(menu){
            this.$store.dispatch('changeBg',menu);
        }
    },
    computed:mapState(['bgColor'])
}
</script>
<style lang="scss">
    .footer{
        width: 100%;
        height: 1rem;
        position: fixed;
        bottom: 0;
        color: #fff;
        line-height: 1rem;
        background:rgb(33, 150, 243);
        display: flex;
        li{
            flex-grow: 1;
            text-align: center;
            a{
                color: #ccc;

                outline: none;
                &.router-link-active{
                    color: #fff;
                }
            }

        }
    }
</style>