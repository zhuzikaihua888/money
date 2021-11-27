<template>
  <div id="app">
  <router-view/>
<div>
</div>
  </div>
</template>

<style lang="scss">
@import "~@/assets/styles/reset.scss";
@import"~@/assets/styles/helper.scss";
body{
    line-height: 1.5;
    font-family: $font-hei;
    font-size:16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
  };

#nav {
  padding: 30px;
  
}
</style>
