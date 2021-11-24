import { reactive } from 'vue';

const state = reactive({
  str: '字符串',
});
const changeStr = (val) => {
  state.str = val;
};

const minstore = {
  state,
  changeStr,
};

export default {
  install: (app) => {
    app.provide('minstore', minstore);
  },
};
