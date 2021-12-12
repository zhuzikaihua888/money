import Layout from '@/components/Layout.vue';
<template>
  
<Layout>
<div class="navBar">
 <Icon name="left" class="leftIcon"/>
  <span class="title">编辑标签</span>
  <span class="rightIcon"></span>
</div>

<div class="from-wrapper"  >
<Notes fieldName="标签" placeholder="请输入标签名" />
</div>

<div class="button-wrapper">
<Button >删除标签</Button>
</div>

</Layout>
</template>

<script lang='ts'>
 import Vue from 'vue'
 import {Component} from 'vue-property-decorator';
 import tagModel  from '@/models/tagModel.ts';
 import Notes from '@/components/Notes.vue';
 import Button from '@/components/Button.vue';
   @Component({
     components:{Notes,Button}
   })
   export default class  LabelsEdit  extends Vue {
      created(){
        //获取到id
        const id=this.$route.params.id
        tagModel.fetch();
        const tags=tagModel.data;
        const tag=tags.filter(t=>t.id===id)[0];
        if(tag){
            console.log(tag)
        }else{
       //可以回退到之前的页面
          this.$router.replace('/404');
        }    
      }     
    };
</script>
<style lang="scss" scoped>
 .navBar {
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: white;
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
  .form-wrapper{
    background:white;
    margin-top: 8px;
  }
  .button-wrapper{
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
</style>