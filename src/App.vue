<template>
  <v-app>
    <v-navigation-drawer temporary absolute persistent v-model="navShow" overflow>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="onLogout" v-if="userIsAuthenticated">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="primary" dark>
      <v-toolbar-side-icon @click.stop="navShow = !navShow" class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title><router-link to="/" tag="span" style="cursor : pointer">DevMeetup</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items  class="hidden-xs-only">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
          flat>
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <v-btn
          @click="onLogout"
          v-if="userIsAuthenticated"
          flat>
          <v-icon left>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        navShow: false
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          { icon: 'face', title: 'Sign in', link: '/signin' },
          { icon: 'lock_open', title: 'Sign up', link: '/signup' }
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups' },
            { icon: 'room', title: 'Organize Meetups', link: '/meetup/new' },
            { icon: 'person', title: 'Profile', link: '/profile' }
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
