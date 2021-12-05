import Labels from '@/views/Labels.vue';
import content from '../shims-vue';

<template>
<div>
 <Layout class-prefix="layout">  
   {{recordlist}}
   <NumberPad @update:value="onupdataAmount"  @x="Recorddata"/>
   <Types :value.sync="record.type" />
   <Notes @update:value="onupdataNotes"/>
   <Tags :data-source.sync="tags" @update:value="onupdataTags"/>       
   </Layout>
</div>
</template>

<script lang='ts' >
import {Component, Watch} from 'vue-property-decorator';
import Vue from 'vue';
import NumberPad from '@/components/NumberPad.vue';
import Types from '@/components/Types.vue';
import Notes from '@/components/Notes.vue';
import Tags from '@/components/Tags.vue';
//申明类型
type Record={
  tages:string[]
  notes:string
  type:string
  amount:number//数据类型 对象下面有类
  createdAt:Date//类
} 
 
 @Component({
        components: { NumberPad, Types, Notes, Tags } //组件引用
    })
  export default class Money  extends Vue{
    tags=['衣','食','住','行',];
   //JSON.parse解析字符串
   recordlist:Record[]=JSON.parse(window.localStorage.getItem('recordlist') || '[]')
   record:Record={tages:[],notes:'',type:'-',amount:0,};
   onupdataTags(value:string []){
   this.record.tages=value;
   };
   onupdataNotes(value:string){
   this.record.notes=value;
   };
  onupdataAmount(value:string){
     this.record.amount=parseFloat(value);
   };
   Recorddata(){
     const record2:Record=JSON.parse(JSON.stringify(this.record))
     record2.createdAt=new Date()
     this.recordlist.push(record2)
   }
@Watch('recordlist')
onRecorddataChange(){
  window.localStorage.setItem('recordlist',JSON.stringify(this.recordlist))
}
    }
</script>

<style lang="scss">
.layout-content{ 
    display: flex;
    flex-direction: column-reverse;
   
};
</style>

