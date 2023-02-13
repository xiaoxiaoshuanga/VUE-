<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test">测试触发一下Demo组件的Hello时间</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo-a",
  beforeCreate() {
    console.log("--beforeCreate--");
  },
  props: ["msg", "school"],
  emits: ["hello"],
  setup(props, context) {
    console.log("--setup--", props, context);
    // console.log("--setup--",context.attrs);//详细与Vue2中的$attrs
    // console.log("--setup--",context.emit);//触发自定义事件的。
    console.log("--setup--", context.slots);//插槽
    const person = reactive({
      name: "张三",
      age: 18,
    });
    function test() {
      context.emit("hello", 666);
    }
    return {
      person,
      test,
    };
  },
};
</script>

<style>
</style>