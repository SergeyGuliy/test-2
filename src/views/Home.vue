<template>
  <v-row class="home">
    <v-col cols="5">
      <v-card>
        <v-toolbar
                flat
                color="primary"
                dark
        >
          <v-toolbar-title>User Profile</v-toolbar-title>
        </v-toolbar>
        <v-tabs vertical v-model="activeTab">
          <v-tab v-for="(tab, index) in tabs" :key="index" :href="'#' + tab.key">
            <template>
              <v-icon left :key="tab.key">
                {{tab.icon}}
              </v-icon>
              {{tab.name}}
            </template>
          </v-tab>
        </v-tabs>
      </v-card>
    </v-col>

    <v-col cols="7">

      <router-view></router-view>
    </v-col>
  </v-row>
</template>

<script>
import myAxios from '../plugins/myAxios';

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      tabs: null,
      activeTab: null,
    };
  },
  created() {
    myAxios.getTabs().then((data) => {
      this.tabs = [...data];
      this.activeTab = this.tabs[0].key;
    }).catch((e) => {
      console.log(e);
    });
  },
  watch: {
    activeTab(val) {
      if (val !== this.$route.params.slug) {
        this.$router.push({ name: 'OperatorsTab', params: { slug: val } });
      }
    },
  },
};
</script>

<style lang="scss">
  .home{

  }
</style>
