<template>
  <div id="app">
    <HeadBar />
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import HeadBar from "@/components/HeadBar.vue";
export default {
  components: {
    SideBar,
    HeadBar
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>
