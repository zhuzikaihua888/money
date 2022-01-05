<template>
 <ul class="tabs">
      <li v-for="item in dataSource" :key="item.value"
      :class="{selected: item.value===value}"
       @click="select(item)">{{item.text}}
       </li> 
 </ul>  
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';
  
  type DataSourceItem={text:string,value:string}
   
   @Component
    export default class Tabs extends Vue {
    @Prop({required:true,type:Array}) 
    dataSource!:DataSourceItem[];
    @Prop(String)
     readonly value!:string;
    @Prop(String) 
    classPrefix?:string;
   select(item:DataSourceItem){
    this.$emit('updata:value',item.value)
   }  
   }
</script>

<style lang="scss" scoped>
.tabs{
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