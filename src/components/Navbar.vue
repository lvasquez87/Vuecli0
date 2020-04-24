<<<<<<< HEAD
<template>
    <div>
        <b-navbar id="navbar" toggleable="md" type="dark" class="bg-gradient-dark shadow p-0" fixed="top">
            <b-button class="m-2" variant="outline-secondary" v-b-toggle.sidebar-1>
                <b-icon-grid-fill></b-icon-grid-fill>
            </b-button>
            
            <b-navbar-brand href="#">
                <b-avatar variant="secondary" text="BV"></b-avatar>
            </b-navbar-brand>
            <b-collapse is-nav>
                <b-navbar-nav>
                    <b-nav-item class="border-left border-secondary" to="/">Home</b-nav-item>
                    <b-nav-item class="border-left border-right border-secondary" to="/about">About</b-nav-item>
                </b-navbar-nav>
                
                <b-navbar-nav class="ml-auto">
                    <b-nav-form rigth>
                        <Loggingnavbar/>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <b-sidebar id="sidebar-1" title="Sidebar" shadow>
        </b-sidebar>
    </div>
</template>

<script>
import Loggingnavbar from './Logginnavbar.vue'
export default {
    components: {
        Loggingnavbar
    }
}
</script>

=======
<template>
    <div>
        <b-navbar id="navbar" toggleable="md" type="dark" class="bg-gradient-dark shadow p-0" fixed="top">
            <b-button class="m-2" variant="outline-secondary" v-b-toggle.sidebar-1>
                <b-icon-grid-fill></b-icon-grid-fill>
            </b-button>
            
            <b-navbar-brand href="#">
                <b-avatar variant="secondary" text="BV"></b-avatar>
            </b-navbar-brand>
            <b-collapse is-nav>
                <b-navbar-nav>
                    <b-nav-item class="border-left border-secondary" to="/">Home</b-nav-item>
                    <b-nav-item class="border-left border-right border-secondary" to="/about">About</b-nav-item>
                </b-navbar-nav>
                
                <b-navbar-nav class="ml-auto">
                    <b-nav-form rigth>
                        <Loggingnavbar/>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <b-sidebar id="sidebar-1" title="Sidebar" shadow>
        </b-sidebar>
    </div>
</template>

<script>
import Loggingnavbar from './Logginnavbar.vue'
export default {
    components: {
        Loggingnavbar
    }
}
</script>

>>>>>>> 22ca08237c80beb0bf3b2016185cb66777f7b9cd
