<template>
    <div v-if="user.loggedIn">
        <h5 class="text-white">
            <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    <em>{{user.data.displayName}}</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </h5>
       
    </div>
    <div v-else>
        <b-row align-h="end" no-gutters>
            <b-form inline>
                <b-input-group>
                    <b-input-group-prepend is-text>
                    <b-icon-person-fill></b-icon-person-fill>
                    </b-input-group-prepend>
                    <b-form-input style="width:166px" class="mr-2" placeholder="Usuario" v-model="email"></b-form-input>
                </b-input-group>
                
                <b-input-group>
                    <b-input-group-prepend is-text>
                    <b-icon-lock></b-icon-lock>
                    </b-input-group-prepend>
                    <b-form-input style="width:166px" class="mr-2" type="password" placeholder="Contraseña" v-model="password"></b-form-input>
                </b-input-group>
                
                <b-button variant="outline-success" @click="signin">Entrar</b-button>
            </b-form>
        </b-row>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
    name: 'Logginnavbar',
    data: function() {
    return {
        email: '',
        password: ''
    };
},
    computed: {
        // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
    },
    methods: {
        signin() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .catch(function(error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
                } else {
                alert(errorMessage);
                }
                console.log(error);
            });
            this.email='';
            this.password=''
        },
        signOut() {
            firebase.auth().signOut()
        }
    }
}
</script>
