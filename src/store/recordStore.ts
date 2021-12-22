 import model from '@/models/model.ts'

export default {
    moduleList:model.fetch(),
    createRecord: (record: RecordItem) => model.create(record),
    saveRecordList:()=>model.save()
}  



