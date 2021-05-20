<template>
  <div class="home">
    <Navbar />
    <img alt="Vue logo" src="../assets/desk.png" />
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
@Options({
  components: {
    HelloWorld,
    Navbar,
  },
})
export default class Home extends Vue {}
</script>
