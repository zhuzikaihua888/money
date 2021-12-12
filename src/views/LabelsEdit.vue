import Layout from '@/components/Layout.vue';
<template>
    <div>
<Layout>
编辑页面
</Layout>
    </div>
</template>

<script lang='ts'>
 import Vue from 'vue'
 import {Component} from 'vue-property-decorator';
 import tagModel  from '@/models/tagModel.ts';
   @Component
   export default class  LabelsEdit  extends Vue {
      created(){
        const id=this.$route.params.id
        tagModel.fetch();
        const tags=tagModel.data;
        const tag=tags.filter(t=>t.id===id)[0];
        if(tag){
            console.log(tag)
        }else{
        this.$router.replace('/404');
        }
        
      }
       
    };
</script>
<style lang="scss" scoped>




</style>