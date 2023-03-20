import { defineStore } from "pinia";
import { IForm } from "@/types/todo";

const agentList: IForm[] = [];
const completionList: IForm[] = [];
const searchList: IForm[] = [];

const usePiniaStroe = defineStore("PINIA_ID", {
  state: () => ({
    agentList,
    completionList,
    searchList,
  }),
  getters: {},
  actions: {
    addList(obj: IForm) {
      this.agentList.push(obj);
    },
    filterList(value: string) {
      const list: IForm[] = this.agentList.filter(item => item.title === value);
      this.searchList = list;
    },
  },
});

export default usePiniaStroe;
