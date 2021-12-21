const localStorageKeyName='recordList';
const model={
    data:[],
    clone(data: RecordItem[] | RecordItem) {
        return JSON.parse(JSON.stringify(data));
      },
    fetch(){
        this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName)  || '[]');
        return this.data
    },
    save(data:RecordItem[]){
        window.localStorage.setItem(localStorageKeyName,JSON.stringify(data));
    }
}

export default model;
