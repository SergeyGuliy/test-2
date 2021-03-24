<template>
  <v-app class="app">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-btn icon @click="$router.push({name: 'Home'})">
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container class="app__container">
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
