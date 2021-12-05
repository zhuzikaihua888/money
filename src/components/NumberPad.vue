<template>
  <div class="numberPad">
<div class="output">{{output}}</div>
<div class="buttons">
    <button @click="inputContent">1</button>
    <button @click="inputContent">2</button>
    <button @click="inputContent">3</button>
    <button @click="remove">删除</button>
    <button @click="inputContent">4</button>
    <button @click="inputContent">5</button>
    <button @click="inputContent">6</button>
    <button @click="clear">清空</button>
    <button @click="inputContent">7</button>
    <button @click="inputContent">8</button>
    <button @click="inputContent">9</button>
    <button @click="ok" class="ok">ok</button>
    <button @click="inputContent" class="zero">0</button>
    <button @click="inputContent">.</button>
</div>
   </div>
</template>

<script lang="ts">
   import Vue from 'vue';
    import {Component} from 'vue-property-decorator';//从 'vue-property-decorator'里面引入装饰器
    @Component
    export default class NumberPad extends Vue{ 
    output: string ='0';
    //MouseEvent鼠标事件
    inputContent(event:MouseEvent){
      console.log(event)
     const button =(event.target as HTMLButtonElement);
     const input=button.textContent!;
     if(this.output.length===16){return;}
     if(this.output === '0'){
       if(`0123456789`.indexOf(input)>=0){
        this.output=input;
       }else{
       this.output += input;
       }
     return;
     }
     if(this.output.indexOf('.')>=0 && input==='.')
     {return;}
     this.output +=input
    };
    remove(){
    const x=this.output.slice(0,-1);
    if(this.output.length===1){
      this.output='0';
    }else{
      this.output=x;
    }
    };
    clear(){
      this.output='0';
    };
    ok(){
   this.$emit('update:value',this.output)
   this.$emit('x',this.output)
    };
    }
</script>

<style lang="scss" scoped>
.numberPad{ 
 > .output{
 //@extend %clearFix;    
 @extend %innerShadow !optional;  
height: 72px;
display: flex;
justify-content: flex-end;
font-size: 36px;
font-family: Consolas,monospace;   
}
 > .buttons{
//引用hepper里面的文件
 @extend %clearFix !optional;
 > button{
   width: 25%;
 height: 64px;
 float: left;
 background: transparent;
 border: none;
 background: #ffd700;
 &.ok{
height: 128px;
float: right;
 }
&.zero{
    width: 50%;
}
   }  
     }
 }
</style>