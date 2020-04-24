<<<<<<< HEAD
<template>
<div id="app">
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <b-icon icon="camera"></b-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left class="bg-gradient-dark">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Application</v-toolbar-title>
        
        <v-btn height="64px" class="d-none d-md-block" tile text to="/">Home</v-btn>
        <v-btn height="64px" class="hidden-sm-and-down" tile text to="/about">About</v-btn>
        <Logginnavbar></Logginnavbar>
        
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
       <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</div>
</template>

<script>
import Logginnavbar from './components/Logginnavbar.vue'

  export default {
    components: {
      Logginnavbar
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
=======
<template>
<div id="app">
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <b-icon icon="camera"></b-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left class="bg-gradient-dark">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Application</v-toolbar-title>
        
        <v-btn height="64px" class="d-none d-md-block" tile text to="/">Home</v-btn>
        <v-btn height="64px" class="hidden-sm-and-down" tile text to="/about">About</v-btn>
        <Logginnavbar></Logginnavbar>
        
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
       <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</div>
</template>

<script>
import Logginnavbar from './components/Logginnavbar.vue'

  export default {
    components: {
      Logginnavbar
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
>>>>>>> 22ca08237c80beb0bf3b2016185cb66777f7b9cd
</script>