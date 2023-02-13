<template>
  <div class="app">
    <h3>我是App组件（祖）,{{ name }}--{{ price }}</h3>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  ref,
  readonly,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
} from "vue";
export default {
  name: "App",
  setup() {
    let car = reactive({ name: "奔驰", price: "40W" });
    let sum = ref(0);
    let car2 = readonly(car);
    console.log(car2)

    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isProxy(car));

    return { ...toRefs(car), sum, car2 };
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
