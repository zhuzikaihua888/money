import Icon from '@/components/Icon.vue';
import Tags from '../components/Tags.vue';
import Labels from '@/views/Labels.vue';
import { Vue } from 'vue-property-decorator';

<template>
    <Layout>
       <div class="tags">
           <router-link :to="`/labels/edit/${tag.id}`" class="tag" v-for="tag in tagList" :key="tag.id">
               {{tag.name}}
               <Icon name="right"/>
            </router-link>
       </div> 
       <div class="wrapper" >
           <Button class="delete" @click="create">新建标签</Button>
       </div>   
    </Layout>
</template>

<script lang='ts'>
   import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import store from '@/store/index.ts'
   @Component({
     components:{Button},
     computed:{
            tagList(){
                return this.$store.state.tagList;
            }
        }
   })
   export default class Labels extends Vue{
    created(){
    this.$store.commit('fetchTags')
    };
 
   create(){
     const name=window.prompt('请输入标签名') ;
     if(name){
       this.$store.commit('createTag',name)
     }
     }
    }   
</script>

<style lang="scss">
.tags{
  background: #ffffff;
  font-size: 16px;
  padding-left: 16px;
    > .tag{
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
  //居中
  display: block;
  margin: 0 auto;
  height: 40px;
  padding:0px 16px;
  }
}
</style>