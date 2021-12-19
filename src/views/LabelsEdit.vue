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
@update:value="updateTag"
fieldName="标签" placeholder="请输入标签名" />
</div>

<div class="button-wrapper">
<Button @click="deleteTag">删除标签</Button>
</div>                  

</Layout>
</template>
<script lang='ts'>
 import Vue from 'vue'
 import {Component} from 'vue-property-decorator';
 import Notes from '@/components/Notes.vue';
 import Button from '@/components/Button.vue';
 import store from '@/store/index2';
   @Component({
     components:{Notes,Button}
   })
   export default class  LabelsEdit  extends Vue {
     tag?:Tag=undefined;
      created(){
        //获取到id
       this.tag=store.findTag(this.$route.params.id)
        if(!this.tag){
      this.tag=tag
        }else{
       //可以回退到之前的页面
          this.$router.replace('/404');
        }    
      }   

   updateTag(name:String){
    if(this.tag){
    store.updateTag(this.tag.id,name)
    }
   }

   deleteTag(){
   if(this.tag){
      if(store.deleteTag(this.tag.id)){
        this.$router.back();
      }
     }else{
       window.alert('删除失败')
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