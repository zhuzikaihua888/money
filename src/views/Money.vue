import Labels from '@/views/Labels.vue';
import content from '../shims-vue';

<template>
<div>
 <Layout class-prefix="layout">  
   <NumberPad/>
   <Types/>
   <Notes/>
   <Tags/>       
    
   </Layout>
</div>
</template>

<script >
import NumberPad from '@/components/NumberPad.vue'
import Types from '@/components/Types.vue'
import Notes from '@/components/Notes.vue'
import Tags from '@/components/Tags.vue'
    export default {
  components: { NumberPad, Types, Notes, Tags },
           }
</script>

<style lang="scss">
.layout-content{ 
    display: flex;
    flex-direction: column-reverse;
   
};
</style>

<style lang="scss" scoped>

</style>