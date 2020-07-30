import { mount, createLocalVue } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import VueRouter from "vue-router";
import router from "@/router/index";
// import TaskAdd from "@/components/TaskAdd.vue";
const localVue = createLocalVue();
localVue.use(VueRouter);

describe("Header.vue", () => {
  it("test header", () => {
    const wrapper = mount(Header, {
      localVue,
      router,
    });
    console.log(wrapper.html());
  });
  // it("renders props.msg when passed", () => {
  //   const msg = "new message";
  //   const wrapper = shallowMount(HelloWorld, {
  //     propsData: { msg },
  //   });
  //   expect(wrapper.text()).toMatch(msg);
  // });
});
