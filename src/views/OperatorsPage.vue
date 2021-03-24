<template>
  <div>
    <div
        v-if="!operatorsList[slug]"
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
    <v-row v-else class="pa-4">
      <v-col
          v-for="(operator, index) in operatorsList[slug]"
          :key="index"
          cols="6"
          sm="4"
          md="3"
      >
        <OperatorCard :operator="operator"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import myAxios from '../plugins/myAxios';

export default {
  name: 'OperatorsPage',
  components: {
    OperatorCard: () => import('../components/views/OperatorCard.vue'),
  },
  async created() {
    await this.fetchTabOperators(this.slug);
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
    operatorsList: {
      get() {
        return this.$store.state.tabsCache.operatorsList;
      },
      set(val) {
        this.$store.commit('tabsCache/setOperatorsList', { key: this.slug, list: val });
      },
    },
  },
  watch: {
    slug(slug) {
      this.fetchTabOperators(slug);
    },
  },
  methods: {
    async fetchTabOperators(slug) {
      if (this.operatorsList[slug]) return;
      await myAxios.getTab(slug).then((data) => {
        this.operatorsList = data.items;
      }).catch((e) => {
        console.log(e);
      });
    },
  },
};
</script>
