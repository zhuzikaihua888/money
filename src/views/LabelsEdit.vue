import Layout from '@/components/Layout.vue';
<template>
  
<Layout>
<div class="navBar">
 <Icon name="left" class="leftIcon" @click.native="goBack"/>
  <span class="title">编辑标签</span>
  <span class="rightIcon"></span>
</div>

<div class="from-wrapper">
<Notes :value="tag.name"  
@update:value="update"
fieldName="标签" placeholder="请输入标签名" />
</div>

<div class="button-wrapper">
<Button @click="remove">删除标签</Button>
</div>                  

</Layout>
</template>
<script lang='ts'>
 import Vue from 'vue'
 import {Component} from 'vue-property-decorator';
 import Notes from '@/components/Notes.vue';
 import Button from '@/components/Button.vue';
 import store from '@/store/index.ts';
 

   @Component({
     components:{Notes,Button},
   })
   export default class  LabelsEdit  extends Vue {
     //tag:{id:string,name:String}=undefined;
     get tag(){
          return this.$store.state.currentTag;
        };
     created(){
      const id =this.$route.params.id
      this.$store.commit('fetchTags',id)
       this.$store.commit('setCurrentTag',id)
        if(!this.tag){
          this.$router.replace('/404');
        }    
      };       
    update(name:String){
    console.log(name)
    if(this.tag){
    this.$store.commit('updateTag',{id:this.tag.id,name})
    }
   }; 
   remove(){
   if(this.tag){
    this.$store.commit('removeTag',this.tag.id);  
   }
   };
   goBack() {
      this.$router.back();
    }
    };
</script>
<style lang="scss" scoped>
 .navBar {
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background:#f5f5f5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .title {
    }
    > .leftIcon {
      width: 24px;
      height: 24px;
    }
    > .rightIcon {
      width: 24px;
      height: 24px;
    }
  }
  .from-wrapper{
    background:white;
    margin-top: 8px;
  }
  .button-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
</style>