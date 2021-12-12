import Layout from '@/components/Layout.vue';
<template>
    <div>
<Layout>
<div>
 <Icon name="left"/>
  <span>编辑标签</span>
</div>
<Notes fieldName="标签" placeholder="请输入标签名" />
</Layout>
    </div>
</template>

<script lang='ts'>
 import Vue from 'vue'
 import {Component} from 'vue-property-decorator';
 import tagModel  from '@/models/tagModel.ts';
 import Notes from '@/components/Notes.vue'
   @Component({
     components:{Notes}
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




</style>