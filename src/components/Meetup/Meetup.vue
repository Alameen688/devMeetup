<template>
  <v-container>
    <v-layout row wrap v-if="loading">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="text--white"
          :width="7"
          :size="70"
        >
        </v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h5 class="primary--text">{{ meetup.title }}</h5>
            <template v-if="userIsCreator">
              <v-spacer></v-spacer>
              <my-edt-dialog :meetup="meetup"></my-edt-dialog>
            </template>
          </v-card-title>
          <v-card-media
            :src="meetup.imageUrl"
            height="400px"
          >
          </v-card-media>
          <v-card-text>
            <div class="info--text">{{ meetup.date | fDate}} - {{ meetup.location }}</div>
            <div>
              <my-edt-date-dialog :meetup="meetup" v-if="userIsCreator"></my-edt-date-dialog>
              <my-edt-time-dialog :meetup="meetup" v-if="userIsCreator"></my-edt-time-dialog>
            </div>
            <div>{{ meetup.description }}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <my-registration-dialog v-if="userIsAuthenticated && !userIsCreator" :meetupId="meetup.id"></my-registration-dialog>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
 export default {
   props: ['id'],
   computed: {
     meetup () {
       return this.$store.getters.loadedMeetup(this.id)
     },
     userIsAuthenticated () {
       return this.$store.getters.user !== null && this.$store.getters.user !== undefined
     },
     userIsCreator () {
       if (!this.userIsAuthenticated) {
         return false
       }
       return this.$store.getters.user.id === this.meetup.creatorId
     },
     loading () {
       return this.$store.getters.meetUpLoading
     }
   }
 }
</script>
<style>

</style>
