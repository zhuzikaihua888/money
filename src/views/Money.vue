import Labels from '@/views/Labels.vue';
import content from '../shims-vue';

<template>
<div>
 <Layout class-prefix="layout">  
   
   <NumberPad @update:value="onupdateAmount"  @x="RecordData"/>
   <Types :value.sync="record.type" />
   <Notes fieldName="备注" 
    placeholder="在这里输入内容"  
    @update:value="onupdateNotes"/>
   <Tags/>       
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
        components: { NumberPad, Types, Notes, Tags } ,//组件引用
        computed:{
        recordList(){
        return store.recordList
      }
    }
    })

  export default class Money  extends Vue{

   //JSON.parse解析字符串获取数据
  //recordList = store.fetchRecords();
   record:RecordItem={tags:[],notes:'',type:'-',amount:0,};
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

