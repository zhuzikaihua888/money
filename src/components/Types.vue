<template>  
   <div>
       <ul class="types">
         <li :class="type ==='+' &&'selected'"
         @click="selectType('+')">收入</li>  
         <li :class="type ==='-' &&'selected'" 
         @click="selectType('-')">支出</li>
       </ul>
   </div>
</template>

<script lang="ts">
    /* export default {
    data(){
     return {
         type:'-'
    }//'-'表示支出 '+'表示收入
    },
    methods: {
     selectType(type){
         this.type=type
     }
    }
    }; */
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';//从 'vue-property-decorator'里面引入装饰器
    //装饰器修饰到class上
    @Component
    export default class Types extends Vue{
    type='-';//-表示支出,'+'表示收入
    selectType(type:string){
         this.type=type
     }
    
    }

</script>


<style lang="scss" scoped>
.types{
    display: flex;
    font-size: 24px;
    background:#ffd700 ;
    text-align: center;
  > li{
   width: 50%;
   height: 64px;
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
   &.selected::after{
   content:'';
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 4px;
   background: #333333;

}
}
}
</style>