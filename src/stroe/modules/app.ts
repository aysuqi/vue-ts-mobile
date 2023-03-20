import { defineStore } from "pinia";

interface IData {
  loading: boolean;
}

const data: IData = {
  loading: false,
};

const useAppStore = defineStore("APP_ID", {
  state: () => ({
    data,
  }),
  getters: {},
  actions: {},
});

export default useAppStore;
