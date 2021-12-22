type RecordItem={
    tages:string[]
    notes:string
    type:string
    amount:number//数据类型 对象下面有类
    createdAt:Date//类
  } 

  type TagModel={
    data:Tag[]
    fetch:()=>Tag[]
    create:(name:string)=> 'success' | 'duplicated'
    update:(id: string, name: string) => 'success' | 'not found' | 'duplicated'
    delete:(id: string )=>boolean
    save:()=>void
    }
    type Tag={
      id:string;
      name:string;
  }

  interface Window{
     tagList:Tag[]
    createTag:(name:string)=> void
    deleteTag:(id:string)=>boolean |undefined
    updateTag:(id:string,name:string)=>'success' | 'not found' | 'duplicated'
    findTag:(id:string)=>tag
    moduleList:RecordItem[] 
    
  }