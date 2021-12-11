import Labels from '@/views/Labels.vue';
import content from '../shims-vue';

<template>
<div>
 <Layout class-prefix="layout">  
   {{recordList}}
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
import model from '@/models/model';
import tagModel from '@/models/tagsmodel';

const recordList:RecordItem[]=model.fetch()
const tagList= tagModel.fetch() 

//申明类型

 
 @Component({
        components: { NumberPad, Types, Notes, Tags } //组件引用
    })
  export default class Money  extends Vue{
    tags=tagList;  
   //JSON.parse解析字符串获取数据
  recordList: RecordItem[] = recordList;
   record:RecordItem={tages:[],notes:'',type:'-',amount:0,};
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
     const record2:RecordItem=JSON.parse(JSON.stringify(this.record))
     record2.createdAt=new Date()
     this.recordList.push(record2)
   }
@Watch('recordList')
onRecorddataChange(){
 //保存数据
 model.save(this.recordList)
}
    }
</script>

<style lang="scss">
.layout-content{ 
    display: flex;
    flex-direction: column-reverse;   
};
</style>

