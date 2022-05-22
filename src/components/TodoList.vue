<template>
  <div class="todolist">
    <el-card class="container">
      <header>
        <el-input
          class="to-do-list"
          v-model="toDoText"
          @keyup.enter="enterText"
          placeholder="輸入計畫要做的事情"
        />
      </header>
      <h3 v-show="toDoList.length > 0">待完成</h3>
      <ul class="not-complete">
        <li v-for="(item, index) in toDoList" :key="item">
          <div class="item">
            <i>{{ index + 1 }}</i>
            <el-input
              type="text"
              :value="item"
              @blur="setValue(index, $event)"
            />
            <el-button
              type="success"
              class="move"
              @click="removeToComplete(item, index)"
              >V</el-button
            >
            <el-button type="danger" class="delete" @click="deleteWait(index)"
              >X</el-button
            >
          </div>
        </li>
      </ul>
      <h3 v-show="completedList.length > 0">已完成</h3>
      <ul class="has-completed">
        <li v-for="(item, index) in completedList" :key="item">
          <div class="item">
            <i>{{ index + 1 }}</i>
            <el-input type="text" :value="item" disabled="true" />
            <el-button
              type="primary"
              class="move"
              @click="removeToWait(item, index)"
              >X</el-button
            >
            <el-button
              type="danger"
              id="deleteItem"
              class="delete"
              @click="deleteComplete(index)"
              >X</el-button
            >
          </div>
        </li>
      </ul>
    </el-card>
  </div>
</template>
<script>
import * as axios from "../../__mocks__/axios";
export default {
  name: "TodoApp",
  data() {
    return {
      toDoText: "",
      toDoList: [],
      completedList: [],
    };
  },
  created() {
    axios
      .get("toToList.json")
      .then((res) => {
        this.toDoList = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    setValue(index, e) {
      this.toDoList.splice(index, 1, e.target.value);
    },
    removeToComplete(item, index) {
      this.completedList.splice(this.completedList.length, 0, item);
      this.toDoList.splice(index, 1);
    },
    removeToWait(item, index) {
      this.toDoList.splice(this.toDoList.length, 0, item);
      this.completedList.splice(index, 1);
    },
    enterText() {
      if (this.toDoText.trim().length > 0) {
        this.toDoList.splice(this.toDoList.length, 0, this.toDoText);
        this.toDoText = "";
      }
    },
    deleteWait(index) {
      this.toDoList.splice(index, 1);
    },
    deleteComplete(index) {
      this.completedList.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 10px auto;
}
ul {
  list-style: none;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.move {
  margin-left: 10px;
}
</style>
