import Labels from '@/views/Labels.vue';
import content from '../shims-vue';

<template>
<div>
    <Layout class-prefix="layout">
    <div class="numberPad">
<div class="output">100</div>
<div class="buttons">
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>删除</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>清空</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button class="ok">ok</button>
    <button class="zero">0</button>
    <button>.</button>

</div>
   </div>
  
   <div>
       <ul class="types">
         <li class="selected">收入</li>  
         <li>支出</li>
       </ul>
   </div>

 <div>
   <label class="notes">
     <span class="name">备注</span>
    <input type="text" placeholder="在这里输入内容">
   </label>
   </div>

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
   </Layout>
</div>
</template>

<script >
    export default {
           }
</script>

<style lang="scss">
.layout-content{
   
    display: flex;
    flex-direction: column-reverse;
    
};

</style>
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