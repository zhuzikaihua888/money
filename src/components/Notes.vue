<template>
    <div>
   <label class="notes">
     <span class="name">{{this.fieldName}}</span>
    <input type="text" 
    :value="value"
    @input="onChildChanged($event.target.value)"
    :placeholder="placeholder">
   </label>
   </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component,Watch,Prop} from 'vue-property-decorator';//从 'vue-property-decorator'里面引入装饰器
    @Component
    export default class Notes extends Vue{ 
    @Prop({default:''}) value:string;
    @Prop({required:true}) fieldName:string;
    @Prop() placeholder:string; 
    onChildChanged(value: string) {
    this.$emit('update:value',value)
   };
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