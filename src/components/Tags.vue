<template>
    <div class="tags">

   <div class="new">
       <button>新增标签</button>
   </div>
    <ul class="current">
   <li v-for="tag in dataSource" :key="tag"
   :class="{selected:selectedTags.indexOf(tag)>=0} "
   @click="toggle(tag)"
   >{{tag}}</li>
   </ul>
   </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import {Component,Prop} from 'vue-property-decorator';
    @Component   
    export default  class Tags  extends  Vue{
     @Prop () dataSource:string[] | undefined;
     selectedTags: string[]=[];
    toggle(tag:string){
  const index=this.selectedTags.indexOf(tag);
     if(index>=0) {
        this.selectedTags.splice(index,1)
    }else{
        this.selectedTags.push(tag);
    }
    
    };



    }
</script>

<style lang="scss" scoped>
.tags{
    display: flex;
    flex-direction: column-reverse;
    font-size: 14px;
    padding: 16px;
      > .current{
   display: flex;
   > li{     
 background: #ffd700;
 height: 24px;
 line-height: 24px;
 border-radius: (24px/2);
 padding: 0 16px;  
 margin-right: 12px;
  &.selected{
      background:#f8f9f9;
  }
   }
  }
   > .new{
       padding-top:16px;
        button{
        background: transparent;
        border:none;
        border-bottom: 1px solid;
        color: #999;
        padding: 0 4px;
    }
   }   
}
</style>