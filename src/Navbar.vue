<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>LOGO</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item active-class="active" class="nav-link" v-for="routes in links" :key="routes.id" :to="routes.path">
            {{ routes.name }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    data() {
      return {
        links: [
          {
            id: 0,
            name: 'Home',
            path: '/Home',
          },
          {
            id: 1,
            name: 'Products',
            path: '/Products',
          }
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>