<template>
    <div>
   <label class="notes">
     <span class="name">备注</span>
    <input type="text" placeholder="在这里输入内容">
   </label>
   </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
  
.notes{
    display: block;
    font-size: 14px;
    background: #f5f5f5;
    padding-left:16px;
    display: flex;
    align-items: center;
  .name{
    
     padding-right: 16px;
 }
  input{
      height:64px;  
      flex-grow: 1;
      background: transparent;
      border:none;
    }

}

</style>