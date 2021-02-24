<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>

    <b-navbar type="dark" variant="dark" class="mt-5 footer">
      <b-navbar-nav class="ml-auto flex-wrap">
        <b-nav-item href="#">網站使用條款</b-nav-item>
        <b-nav-item href="#">隱私權政策</b-nav-item>
        <b-nav-item href="#">免責聲明</b-nav-item>
        <b-nav-item disabled d-md-block>© 2021 logo</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
  import Navbar from "./Navbar.vue";
  
  export default {
    name: 'app',
    components: {
      Navbar
    }
  }
</script>

<style lang="scss" scoped>

</style>