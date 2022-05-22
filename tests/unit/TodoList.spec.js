import { mount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";
import ElementPlus from "element-plus";
import { beforeEach } from "@jest/globals";

describe("TodoList.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(TodoList, {
      global: {
        plugins: [ElementPlus],
      },
    });
  });
  // wrapper.vm 是一個 Vue 例項，只有 Vue 元件的包裹器才有 vm 這個屬性；通過 wrapper.vm 可以訪問所有 Vue 例項的屬性和方法。比如： wrapper.vm.$data、 wrapper.vm.$nextTick()。
  it("輸入框初始值為空字串", () => {
    expect(wrapper.vm.toDoText).toBe("");
  });

  // it("待完成列表初始值應該為空陣列", () => {
  //   expect(wrapper.vm.toDoList.length).toBe(0);
  // });

  it("已完成列表初始值應該為空陣列", () => {
    expect(wrapper.vm.completedList).toEqual([]);
  });

  it("輸入框值變化的時候, toDoText應該跟著變化", () => {
    // setValue 可以設定一個文字控制元件的值並更新 v-model 繫結的資料。
    wrapper.find(".el-input__inner").setValue("complted test");
    expect(wrapper.vm.toDoText).toBe("complted test");
  });
  it("輸入框沒有值, 按enter得時候, 無變化", () => {
    const length = wrapper.vm.toDoList.length;
    const input = wrapper.find(".el-input__inner");
    input.setValue("");
    // trigger 方法可以用來觸發一個 DOM 事件
    input.trigger("keyup.enter");
    expect(wrapper.vm.toDoList.length).toBe(length);
  });

  it("輸入框有值,按enter,待完成列表將新增一條資料,同時清空輸入框", () => {
    const length = wrapper.vm.toDoList.length;
    const input = wrapper.find(".el-input__inner");
    input.setValue("complted test");
    input.trigger("keyup.enter");
    expect(wrapper.vm.toDoList.length).toBe(length + 1);
    expect(wrapper.vm.toDoText).toBe("");
  });

  it("待完成列表點選刪除，同時更新toDoList陣列", () => {
    wrapper.setData({ toDoList: ["complted test"] });
    expect(wrapper.vm.toDoList.length).toBe(1);
    wrapper.find(".not-complete").find(".delete").trigger("click");
    expect(wrapper.vm.toDoList.length).toBe(0);
  });
  it("點選待完成列表中某項的已完成按鈕，資料對應更新", () => {
    wrapper.setData({ toDoList: ["complted test"] });
    expect(wrapper.vm.toDoList.length).toBe(1);
    expect(wrapper.vm.completedList.length).toBe(0);
    wrapper.find(".not-complete").find(".move").trigger("click");
    expect(wrapper.vm.toDoList.length).toBe(0);
    expect(wrapper.vm.completedList.length).toBe(1);
  });
  it("列表序號從1開始遞增", () => {
    wrapper.setData({ toDoList: ["complted test", "ok"] });
    expect(wrapper.vm.toDoList.length).toBe(2);
    expect(wrapper.find(".not-complete").html()).toMatch("<i>1</i>");
    expect(wrapper.find(".not-complete").html()).toMatch("<i>2</i>");
  });
});
