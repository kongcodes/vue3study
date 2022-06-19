<template>
  <el-row class="elrow">
    <el-col :xs="16" :sm="16" :md="10" :lg="10" :xl="10">
      <div class="logobox">
        <img alt="Vue logo" src="@/assets/logo.png" />
        <h3
          style="
            color: #fff;
            height: 60px;
            margin: 0;
            padding: 0;
            line-height: 60px;
          "
        >
          logo
        </h3>
      </div>
    </el-col>
    <el-col :xs="8" :sm="8" :md="14" :lg="14" :xl="14">
      <el-menu
        :default-active="$route.path"
        class="el-menu-nav hidden-sm-and-down"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      >
        <el-menu-item v-for="item in navItem" :index="item.url">
          {{ item.name }}
        </el-menu-item>
      </el-menu>
      <div class="icon-box hidden-sm-and-up">
        <el-menu
          :default-active="$route.path"
          class="el-menu2"
          mode="horizontal"
          menu-trigger="click"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
        >
          <el-submenu index="">
            <template v-slot:title>
              <i class="el-icon-s-fold icon-nav"></i>
            </template>
            <el-menu-item v-for="item in navItem" :index="item.url">
              {{ item.name }}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

let activeIndex = ref('/');
let navItem = [
  { url: '/', name: '首页' },
  { url: '/test', name: '测试页' },
  { url: '/reactivity-apis', name: '响应性API' },
  { url: '/composition-apis', name: '组合式API' },
  { url: '/common-apis', name: '侦听器' },
  { url: '/vuerouter', name: 'VueRouter' },
  { url: '/vuexpage', name: 'Vuex' },
  { url: '/compview', name: '组件化' },
];
// console.log(route.path)
activeIndex = route.path || '/';
function handleSelect(key, keyPath) {
  // console.log('fn-------------handleSelect', key, keyPath);
}
</script>
<style lang="scss" scoped>
.logobox {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logobox > img {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}
.elrow {
  background-color: rgb(84, 92, 100);
}
.el-menu-item {
  height: 60px;
  line-height: 60px;
}
.el-menu.el-menu--horizontal {
  border: none;
}

::v-deep(.icon-nav) {
  color: #fff;
  font-size: 30px;
}
.icon-box {
  height: 60px;
  line-height: 60px;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  border: none;
}
.el-submenu__title {
  background-color: #545c64;
}
::v-deep(.el-submenu__icon-arrow, .el-icon-arrow-down) {
  display: none;
}
.el-menu2 {
  float: right;
}
</style>
