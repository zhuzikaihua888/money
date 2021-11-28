<template>
    <div class="tags">

   <div class="new">
       <button>新增标签</button>
   </div>
    <ul class="current">
   <li>衣</li>
   <li>食</li>
   <li>住</li>
   <li>行</li>
   </ul>
   </div>
</template>

<script>
    export default {
        
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
 //确定只有一行字的时候可以用height和line-height一样高
 height: 24px;
 line-height: 24px;
 border-radius: (24px/2);
 padding: 0 16px;  
 margin-right: 12px;
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