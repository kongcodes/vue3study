const state = () => ({
  num: 100,
  str: 'count.js中的字符串',
});

const mutations = {
  increment(state) {
    state.num++;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
