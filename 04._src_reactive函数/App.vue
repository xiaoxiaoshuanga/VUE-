<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>工作种类：{{ person.job.type }}</h2>
  <h2>工作薪水：{{ person.job.salary }}</h2>
  <h2>测试数据c:{{ person.job.a.b.c }}</h2>
  <h2>爱好：{{ person.hobby }}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
// import { ref, reactive } from "vue";
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    // let name = ref("张三");
    // let age = ref(18);
    // let job = reactive({
    //   type: "前端工程师",
    //   salary: "30k",
    //   a: {
    //     b: {
    //       c: 600,
    //     },
    //   },
    // });
    // let hobby = reactive(["吃饭", "睡觉", "学习"]);

    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "前端工程师",
        salary: "30k",
        a: {
          b: {
            c: 600,
          },
        },
      },
      hobby: ["吃饭", "睡觉", "学习"],
    });

    function changeInfo() {
      person.name = "李四";
      person.age = 48;
      person.job.type = "UI设计师";
      person.job.salary = "60k";
      person.job.a.b.c = 999;
      person.hobby[2] = "开车";
    }
    return {
      person,
      changeInfo,
    };
  },
};
</script>

<style>
</style>
