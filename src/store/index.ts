import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/creatId/clone.ts'
const localStorageKeyName='recordList';
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    },
    createRecord(state,record) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
     state.recordList.push(record2);
     store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem(localStorageKeyName, JSON.stringify(state.recordList));
    },
  },
})


export default store;