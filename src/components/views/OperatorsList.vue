<template>
  <v-card class="operators-list">
    <v-toolbar
        flat
        color="primary"
        dark
    >
      <v-toolbar-title>{{getActiveTabName}}</v-toolbar-title>
    </v-toolbar>
    <router-view v-if="activeTab"></router-view>
  </v-card>
</template>

<script>
export default {
  name: 'OperatorsList',
  components: {},
  props: {
    getActiveTabName: {
      required: true,
    },
    activeTab: {
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang='scss'>
  .operators-list {
    min-height: 100%;
  }
</style>
