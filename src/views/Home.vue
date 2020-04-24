<template>
  <div >
    <b-container fluid>
      <b-row>
        <b-col class="d-none d-md-block">
          <carrusel/>
        </b-col>
        <b-col cols="12" md="4">
           <registrando/>
        </b-col>
        
      </b-row>
      
    </b-container>
    
    
  </div>
  
</template>

<script>
// @ is an alias to /src

import Registrando from '../components/Registrando.vue'
import Carrusel from '../components/Carrusel.vue'
export default {
  name: 'Home',
  components: {
    Registrando,
    Carrusel
  }
}
</script>
