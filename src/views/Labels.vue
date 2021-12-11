import Icon from '@/components/Icon.vue';
import Tags from '../components/Tags.vue';
import Labels from '@/views/Labels.vue';
import { Vue } from 'vue-property-decorator';
<template>
 
    <Layout>
       <ol class="tags">
           <li v-for="tag in tags" :key="tag">
               <span >{{tag}} </span>
               <Icon name="right"/>
               </li>
       </ol> 
       <div class="wrapper" >
           <button class="delete" @click="creatTag">新建标签</button>
       </div>   
  
    </Layout>
</template>

<script lang='ts'>
   import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagModel  from '@/models/tagsmodel'


tagModel.fetch();
   @Component
   export default class Labels extends Vue{
   tags=tagModel.data;
 creatTag(){
     const name=window.prompt('请输入标签名') ;
     if(name){ 
    const message=tagModel.create(name);
    if(message==='duplicated'){
    window.alert('标签重复')
    }
    

     }

 }
   }
</script>

<style lang="scss">
.tags{
  background: #ffffff;
  font-size: 16px;
  padding-left: 16px;
    > li{
   min-height: 44px;
   display: flex;
   align-items: center;
   justify-content: space-between; 
   border-bottom:1px solid #e6e6e6
    }
    svg{
        color: #666;
        margin-right: 16px;
    }
}
  .wrapper{
  margin-top:44-16px;
  > .delete{
  border: none; 
  border-radius: 4px;
  color:black;
  background: yellow;
  //居中
  display: block;
  margin: 0 auto;
  height: 40px;
  padding:0px 16px;
  }
}




</style>