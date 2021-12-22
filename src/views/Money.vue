import Labels from '@/views/Labels.vue';
import content from '../shims-vue';

<template>
<div>
 <Layout class-prefix="layout">  
   {{recordList}}
   <NumberPad @update:value="onupdateAmount"  @x="RecordData"/>
   <Types :value.sync="record.type" />
   <Notes fieldName="备注" 
    placeholder="在这里输入内容"  
    @update:value="onupdateNotes"/>
   <Tags :data-source.sync="tags" @update:value="onupdateTags"/>       
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
import store from '@/store/index2.ts'
import clone from '@/creatId/clone.ts'
        
//申明类型 
 @Component({
        components: { NumberPad, Types, Notes, Tags } //组件引用
    })
  export default class Money  extends Vue{
    tags=store. fetchTags();  
   //JSON.parse解析字符串获取数据
  recordList = store.fetchRecords();
   record:RecordItem={tags:[],notes:'',type:'-',amount:0,};
   onupdateTags(value:string[]){
   this.record.tags=value;
   };
   onupdateNotes(value:string){ 
   this.record.notes=value;
   };
  onupdateAmount(value:string){
  this.record.amount=parseFloat(value);
   };
   RecordData(){
     store.createRecord(this.record)
   }
 @Watch('recordList')
onRecordDataChange(){
 store.saveRecords()
}
    } 
</script>

<style lang="scss">
.layout-content{ 
    display: flex;
    flex-direction: column-reverse;   
};
</style>

