<template>
  <div>
    <van-search
      v-model="searchValue"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <van-icon name="plus" size="24" @click="plshTodoList" />
      </template>
    </van-search>

    <section v-show="!searchValue">
      <van-checkbox-group v-model="checked">
        <van-cell-group inset>
          <van-cell
            v-for="item in agentList"
            clickable
            :key="item"
            :title="item.title"
            :label="item.content"
          >
            <template #right-icon>
              <van-checkbox :name="item" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </section>

    <section v-show="searchValue">
      <van-checkbox-group v-model="checked">
        <van-cell-group inset>
          <van-cell
            v-for="item in searchList"
            clickable
            :key="item"
            :title="item.title"
            :label="item.content"
          >
            <template #right-icon>
              <van-checkbox :name="item" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </section>

    <van-popup
      round
      v-model:show="show"
      position="bottom"
      :style="{ height: '70%' }"
    >
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <h3>Todo List</h3>
          <van-field
            v-model="form.title"
            name="title"
            label="标题"
            placeholder="标题"
            :rules="[{ required: true, message: '请填写标题' }]"
          />
          <van-field
            v-model="form.content"
            name="content"
            label="内容"
            placeholder="内容"
            :rules="[{ required: true, message: '请填写内容' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { usePiniaStroe } from "@/stroe/modules";
import { storeToRefs } from "pinia";
import { IForm } from "@/types/todo";

const store = usePiniaStroe();
const { agentList, searchList } = storeToRefs(store);
const searchValue = ref("");
const show = ref(false);
let form: IForm = reactive({
  id: "",
  title: "",
  content: "",
});
const checked = ref([]);
function ressetFrom() {
  form.id = "";
  form.title = "";
  form.content = "";
}
function onSubmit(values: object) {
  store.addList(values);
  ressetFrom();
  show.value = false;
}
function onSearch(value: string) {
  console.log(value);
  store.filterList(value);
}
function plshTodoList() {
  show.value = true;
}
</script>

<style scoped lang="scss"></style>
