const state = () => ({
  cartList: [
    { name: '羽毛球', price: 5 },
    { name: '篮球', price: 120 },
    { name: '洗发水', price: 50 },
    { name: '运动鞋', price: 2000 },
    { name: '纸巾', price: 20 },
  ],
});

const getters = {
  getList: (state) => state.cartList,
  getListLow: (state) => (num) => {
    return state.cartList.filter((item) => item.price < num);
  },
};

export default {
  namespaced: true,
  state,
  getters,
};
