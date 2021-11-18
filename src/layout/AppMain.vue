<template>
  <section>
    <!-- 缓存 -->
    <!-- <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view> -->
    <!-- 动画过渡效果 -->
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view> -->
    <!-- 单个路由动画 -->
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script setup></script>

<style scoped>
/* fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: 0.5s ease;
}

.slide-enter-from {
  transform: translateX(-50px);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
