<template>
    
   <div>
       <ul class="types">
         <li class="selected">收入</li>  
         <li>支出</li>
       </ul>
   </div>

</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.types{
    display: flex;
    font-size: 24px;
    background:#ffd700 ;
    text-align: center;
>li{
width: 50%;
height: 64px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
   &.selected::after{
   content:'';
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 4px;
   background: #333333;

}
}
}
</style>