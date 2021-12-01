const state = () => ({
  num: 100,
  str: 'count.js中的字符串',
});

const mutations = {
  increment(state) {
    state.num++;
  },
};

const actions = {
  increment(context) {
    // context.commit('increment');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('increment');
        resolve();
      }, 500);
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
