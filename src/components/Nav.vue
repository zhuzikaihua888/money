<template>
<nav>
<router-link to="/labels" class="items">
<Icon name="label"/>
标签</router-link>

<router-link to="/money"  class="items">
<Icon name="money"/>记账

</router-link>

<router-link to="/statistics" class="items">
<Icon name="Statitics"/>统计
</router-link>
</nav>
</template>

<script lang='ts'>
    export default {
        
    }
</script>
<style lang="scss" scoped>
nav{
display: flex;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
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

}

</style>