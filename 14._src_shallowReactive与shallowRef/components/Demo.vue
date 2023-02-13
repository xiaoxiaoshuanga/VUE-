<template>
  <h4>当前的x.y的值是：{{ x.y }}</h4>
  <button @click="x.y++">点我x.y+1</button>
  <hr />
  <h4>{{ person }}</h4>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <hr />
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, toRefs, shallowReactive, ref, shallowRef } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Demo",
  setup() {
    // 数据
    let person = shallowReactive({//只考虑第一层数据的响应式
    // let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // let x = ref({
    //   y: 0,
    // });
    let x = shallowRef({
      y: 0,
    });
    x.value = [1,2]
    console.log(x);

    return {
      x,
      person,
      ...toRefs(person),
    };
  },
};
</script>

<style>
</style>