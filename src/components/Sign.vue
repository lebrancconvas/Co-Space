<template>
  <div>
    <router-link to="/signup">
      <button type="button" id="signup" class="btn btn-warning">Sign Up</button>
    </router-link>

    <router-link to="/login">
      <button type="button" id="login" class="btn btn-primary">Log in</button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div #signup {
  margin: 0px 10px 0px 0px;
}

div #login {
  margin: 0px 10px 0px 0px;
}
</style>
