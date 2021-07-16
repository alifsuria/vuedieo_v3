<template>
  <Navbar />
  <router-view />
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import Navbar from "./components/Navbar.vue";
// import { useStore } from "vuex";
export default {
  components: { Navbar },
  setup() {
    // const store = useStore();

    onMounted(() => {
    
      // console.log(sidebar.value,test.value)
    });
  },
};
</script>
<style>
#app {
  font-family: "Roboto", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.scrollbar-lock{
  overflow: hidden !important;
  padding-right: 17px !important;
  background-color: rgb(51, 49, 49);
}




</style>
