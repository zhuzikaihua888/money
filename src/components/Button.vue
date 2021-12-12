<template>
    <div>
 <button class="button" @click="$emit('click',$event)">
     <slot/>
 </button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
  .button{
  margin-top:44-16px;
  border: none; 
  border-radius: 4px;
  color:black;

  //居中
  display: block;
  margin: 0 auto;
  height: 40px;
  padding:0px 16px;
  
}
</style>