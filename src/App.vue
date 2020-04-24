<template>
    <div id="app">
        <!-- barra navegacion -->
        <Navbar></Navbar>
        <!-- contenido router -->
        <b-container fluid class="mt-4 pt-5">
            <router-view ></router-view>
        </b-container>
        <!-- footer -->
        <Footerr></Footerr>
        
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footerr from './components/Footer.vue'
  export default {
    components: {
        Navbar,
        Footerr
    }
  }
</script>

