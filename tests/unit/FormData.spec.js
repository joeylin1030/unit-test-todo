import { mount } from "@vue/test-utils";
import FormData from "@/components/FormData.vue";
import ElementPlus from "element-plus";
import { beforeEach } from "@jest/globals";

describe("FormData.spec.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(FormData, {
      global: {
        plugins: [ElementPlus],
      },
    });
  });
  it("submits the form", async () => {
    const name = "lin";
    const checkTime = "上午9:00 - 11:30";
    const address = "台灣大道";
    const targetDate = "2022-05-20";
    await wrapper.get('[data-test="name"]').setValue(name);
    await wrapper.get('[data-test="checkTime"]').setValue(checkTime);
    await wrapper.get('[data-test="address"]').setValue(address);
    await wrapper.get('[data-test="targetDate"]').setValue(targetDate);
    expect(wrapper.vm.form).toEqual({
      name,
      checkTime,
      address,
      targetDate,
    });
    await wrapper.get('[data-test="form"]').trigger("submit.prevent");
    expect(wrapper.emitted("submit")[0][0]).toEqual({
      name,
      checkTime,
      address,
      targetDate,
    });
  });
});
