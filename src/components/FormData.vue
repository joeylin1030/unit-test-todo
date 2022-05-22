<template>
  <el-card class="container">
    <el-form
      :model="formData"
      ref="formData"
      :rules="rules"
      label-position="left"
      label-width="150px"
      @submit.prevent
      data-test="form"
    >
      <el-form-item
        label="收件人姓名"
        prop="name"
        class="required label-right-align"
        data-test="name"
      >
        <el-input v-model="formData.name" type="text" clearable></el-input>
      </el-form-item>
      <el-form-item
        label="接收時間"
        prop="checkTime"
        class="required label-right-align"
        data-test="checkTime"
      >
        <el-checkbox-group v-model="formData.checkTime">
          <el-checkbox
            v-for="(item, index) in checkTimeOptions"
            :key="index"
            :label="item.value"
            :disabled="item.disabled"
            style="
               {
                display: inline;
              }
            "
            >{{ item.label }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item
        label="收件人地址"
        prop="address"
        class="required label-right-align"
        data-test="address"
      >
        <el-input v-model="formData.address" type="text" clearable></el-input>
      </el-form-item>
      <el-form-item label="日期" prop="targetDate" class="label-right-align">
        <el-date-picker
          v-model="formData.targetDate"
          type="date"
          class="full-width-input"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
          clearable
          data-test="targetDate"
        ></el-date-picker>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      formData: {
        name: "",
        checkTime: [],
        address: "",
        targetDate: null,
      },
      rules: {
        name: [
          {
            required: true,
            message: "不可以為空",
          },
        ],
        checkTime: [
          {
            required: true,
            message: "不可以為空",
          },
        ],
        address: [
          {
            required: true,
            message: "不可以為空",
          },
        ],
        targetDate: [
          {
            required: true,
            message: "不可以為空",
          },
        ],
      },
      checkTimeOptions: [
        {
          label: "上午9:00 - 11:30",
          value: 1,
        },
        {
          label: "下午12:30 - 18:00",
          value: 2,
        },
      ],
    };
  },
  methods: {
    submitForm() {
      this.$refs["formData"].validate((valid) => {
        if (!valid) return;
        this.$emit("submitForm", this.formData);
      });
    },
    resetForm() {
      this.$refs["formData"].resetFields();
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
