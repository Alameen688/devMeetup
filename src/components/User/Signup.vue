<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex x12 sm6 offset-sm3>
        <my-alert @dissmised="onDissmiss" :text="error.message">
        </my-alert>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <v-form @submit.prevent="onSignUp">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Email"
                      id="email"
                      type="email"
                      v-model="email"
                      required
                    >
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required
                    >
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      type="password"
                      v-model="confirmPassword"
                      :rules="[comparePassword]"
                    >

                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn
                      type="submit"
                      :loading="loading"
                      :disabled="loading"
                    >
                      Sign Up
                      <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                      </span>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      comparePassword () {
        return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
      },
      user () {
        return this.$store.getters.user
      },
      loading () {
        return this.$store.getters.loading
      },
      error () {
        return this.$store.getters.error
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('./')
        }
      }
    },
    methods: {
      onSignUp () {
        this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
      },
      onDissmiss () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>
<style>
</style>
