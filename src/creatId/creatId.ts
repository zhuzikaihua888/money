let id:number=parseInt(window.localStorage.getItem('_inMax')||'0') ||0;
function createId(){
    id++;
    console.log(id) 
    window.localStorage.setItem('_idMax', id.toString());
    return id;
   
}

export default  createId;