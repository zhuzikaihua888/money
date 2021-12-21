import tagModel from '@/models/tagModel'
export default {
    tagList: tagModel.fetch(),
    findTag(id:string){
     return this.tagList.filter(t=>t.id===id)[0];
    },
    createTag:(name:string) =>{
      if(name){ 
        const message=tagModel.create(name);
        if(message==='duplicated'){
        window.alert('标签重复')
        }
    }
    },
    deleteTag:(id:string)=>{
      if(id){
        if(tagModel.delete(id)){
        return  true
        }
       }else{
        return false
       }
    },
   updateTag:(id:string,name:string)=>{
      return tagModel.update(id,name)
    },

}

