const localStorageKeyName='recordList';
const model={
    data:[],
    fetch(){
        this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName)  || '[]');
        return this.data
    },
    save(data:RecordItem[]){
        window.localStorage.setItem(localStorageKeyName,JSON.stringify(data));
    }
}

export default model;
