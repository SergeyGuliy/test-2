<template>
  <v-app class="app">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="app__container py-8">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data() {
    return {

    };
  },
};
</script>

<style lang="scss">
  .app{
    .app__container{
      min-height: 100%;
      display: flex;
      align-items: stretch;
      justify-content: center;
    }
  }
</style>
