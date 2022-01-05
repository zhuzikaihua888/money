<template>
    <Layout>
 <types class-prefix="zzz" :value.sync="yyy"/>
 <Tabs :data-source="array" :value.sync="hhh"/>
    </Layout>
</template>

<script lang="ts">
   import {Component} from 'vue-property-decorator';
   import Vue from 'vue';
   import Types from '@/components/Types.vue';
   import Tabs from '@/components/Tabs.vue';
   @Component({
        components:{Types,Tabs},
    })
   export default class Statistics extends Vue {        
   yyy='-';
   hhh='day';
   array=[
       {text:'按天',value:'day'},
       {text:'按周',value:'week'},
       {text:'按月',value:'month'},
   ];

    }
</script>

<style scoped lang="scss">
  ::v-deep .zzz-item{
   background:white;
    &.selected{
        background-color:#ffd700;
        &::after{
            display:none;
        }
    }
 }

</style>
