<template>
<nav>
<router-link to="/labels" class="items" active-class="selected">
<Icon name="label"/>
标签</router-link>

<router-link to="/money"  class="items" active-class="selected">
<Icon name="money"/>记账
</router-link>

<router-link to="/statistics" class="items" active-class="selected">
<Icon name="statistics"/>统计
</router-link>
</nav>
</template>

<script lang='ts'>
    export default {
        
    }
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";
nav{
@extend %outShadow;
display: flex;

flex-direction: row;
> .items{
padding: 2px 0;
width: 33.3333%;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
.icon{
    width: 32px;
    height: 32px;
 }
}
 > .items.selected{
  color:$color-highlight;

 }

}



</style>