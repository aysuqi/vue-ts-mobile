import { defineStore } from "pinia";
import { IData } from "@/types/app";

const data: IData = {
  loading: false,
  menus: [{ path: "/example/todo", title: "TodoList", desc: "代办示例" }],
};

const useAppStore = defineStore("APP_ID", {
  state: () => ({
    data,
  }),
  getters: {},
  actions: {},
});

export default useAppStore;
