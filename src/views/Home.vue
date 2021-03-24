<template>
  <v-container>
    <v-row class="home">
      <v-col cols="4">
        <v-card>
          <v-toolbar
              flat
              color="primary"
              dark
          >
            <v-toolbar-title>Категории</v-toolbar-title>
          </v-toolbar>
          <div
              v-if="!tabs"
              class="d-flex align-center justify-center"
              style="min-height: 100%"
          >
            <v-progress-circular
                :size="70"
                :width="7"
                color="purple"
                indeterminate
            />
          </div>
          <v-tabs vertical v-model="activeTab" v-else>
            <v-tab
                v-for="(tab, index) in tabs"
                :key="index"
                :href="'#' + tab.key"
                class="justify-start"
            >
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

      <v-col cols="8">
        <OperatorsList :getActiveTabName="getActiveTabName" :activeTab="activeTab"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import myAxios from '../plugins/myAxios';

export default {
  name: 'Home',
  components: {
    OperatorsList: () => import('../components/views/OperatorsList'),
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
  computed: {
    getActiveTabName() {
      return this.tabs?.find((tab) => tab.key === this.activeTab).name;
    },
  },
};
</script>

<style lang="scss">
  .home{
    min-height: 100%;

  }
</style>
