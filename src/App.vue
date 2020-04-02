<template>
  <div id="app">
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    SideBar
  }
};
</script>

<style></style>
