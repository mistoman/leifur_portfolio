<template>
  <div id="toplevel-wrapper" class="container-fluid d-flex min-vh-100 flex-column">
    <NavigationComponent />
    <router-view/>
    <FooterComponent class="" /> <!-- fixed-bottom (class) -->
  </div>  
</template>

<script>
import NavigationComponent from '@/components/NavigationComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    FooterComponent,
    NavigationComponent
  }
}
</script>

<style lang="scss">
body {
  scroll-behavior:initial;
}
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*  text-align: center;  Remove, or all is centered  */ 
  color: #2c3e50;

}

#toplevel-wrapper { 
  padding:0; /* Added */
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
