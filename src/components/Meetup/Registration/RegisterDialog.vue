<template>
  <v-dialog primary persistent v-model="registerDialog">
    <v-btn accent slot="activator">
      {{ isUserRegistered ? 'Unregister' : 'Register' }}
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>{{ isUserRegistered ? 'Unregister from': 'Register for' }} meetup? </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>You can always change your decision later on</v-card-text>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn
                class="red--text darken-1"
                flat
                @click="registerDialog = false"
              >
                Cancel
              </v-btn>
              <v-btn
                class="green--text darken-1"
                flat
                @click="onAgree"
              >
                Confirm
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['meetupId'],
    data () {
      return {
        registerDialog: false
      }
    },
    computed: {
      isUserRegistered () {
        // if greater than 0 its true, if less than i.e -1 is false
        return this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
          return meetupId === this.meetupId
        }) >= 0
      }
    },
    methods: {
      onAgree () {
        if (this.isUserRegistered) {
          this.$store.dispatch('unregisterUserFromMeetup', this.meetupId)
        } else {
          this.$store.dispatch('registerUserForMeetup', this.meetupId)
        }
      }
    }
  }
</script>
