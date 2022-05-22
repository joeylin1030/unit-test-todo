<template>
  <FormData @submitForm="submitForm" />
  <TodoList />
  <el-button type="primary" @click="handleSubmit(ruleFormRef)">送出</el-button>
  <el-button @click="resetForm(ruleFormRef)">取消</el-button>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import FormData from "@/components/FormData.vue";

export default {
  name: "mainForm",
  components: {
    TodoList,
    FormData,
  },
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    handleSubmit() {},
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
