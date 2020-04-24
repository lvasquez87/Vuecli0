<template>
  <div>
    <b-container fluid class="bg-gradient-info rounded-lg border border-warning">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class=" mb-2">
            <!-- encabezado -->
            <b-form-text><h3 class="text-white-50" style="text-align:center">Regístrate</h3></b-form-text>
            <!-- nombre -->
                <b-form-group id="input-group-2" label="Su nombre:" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.name" required placeholder="Nombre" class="shadow">
                    </b-form-input>
                </b-form-group>
                <!-- email -->
                <b-form-group id="input-group-1" label="Direccion de correo:" label-for="input-1" description="No compartiremos esta informacion con nadie.">
                    <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Email" class="shadow">
                    </b-form-input>
                </b-form-group>
                <!-- password -->
                <b-form-group id="input-group-3" label="Password:" label-for="input-3">
                    <b-form-input id="input-3" type="password" v-model="form.pass" required placeholder="Contraseña" class="shadow">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-4">
                    <b-form-checkbox-group v-model="form.checked" id="checkboxes-4" variant="success">
                    <b-form-checkbox value="acuerdo" required>Acepto</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>
                <b-button type="submit" variant="success" class="shadow">Submit</b-button>
                <b-button type="reset" variant="outline-danger" class="shadow">Reset</b-button>
        
        </b-form> 
    </b-container>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'Registrando',
    data() {
      return {
        form: {
          email: '',
          name: '',
          pass: '',
          checked: []
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        const name = this.form.name
        const email = this.form.email
        const password = this.form.pass

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
        function(UserCredential) {
          UserCredential.user.updateProfile({displayName: name})
        }).catch(function(error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
        this.form.email = ''
        this.form.name = ''
        this.form.pass = ''
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.pass = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>