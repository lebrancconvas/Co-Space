<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/desk.png" />
    <HelloWorld />
    <Sign />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Sign from "@/components/Sign.vue";
@Options({
  components: {
    HelloWorld,
    Navbar,
    Sign,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.home img {
  width: 200px;
  height: 205px;
  margin: 10px 10px 20px 10px;
}
</style>
