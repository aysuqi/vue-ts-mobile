<template>
  <div>
    <van-cell-group inset>
      <van-cell
        v-for="item in data.menus"
        :key="item.path"
        is-link
        :title="item.title"
        :to="item.path"
        :label="item.desc"
      />
    </van-cell-group>
  </div>
</template>
<script setup lang="ts">
import { useAppStore } from "@/stroe/modules";
import { storeToRefs } from "pinia";

const store = useAppStore();
const { data } = storeToRefs(store);
</script>
<style scoped lang="scss">
.text {
  font-size: 34px;
}
</style>
