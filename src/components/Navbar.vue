<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Co Space</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/"
              ><a class="nav-link" href="#"
                >Home <span class="sr-only">(current)</span></a
              ></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about"
              ><a class="nav-link" href="#">About</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/login"
              ><a class="nav-link" href="#">Login</a></router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Navbar extends Vue {}
</script>

<style scoped></style>
