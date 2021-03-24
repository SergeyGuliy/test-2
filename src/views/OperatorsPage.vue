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
          cols="3"
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
  data() {
    return {
      operatorsList: {},
    };
  },
  created() {
    this.fetchTabOperators(this.slug);
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
  },
  watch: {
    slug(slug) {
      this.fetchTabOperators(slug);
    },
  },
  methods: {
    fetchTabOperators(slug) {
      if (this.operatorsList[slug]) return;
      myAxios.getTab(slug).then((data) => {
        this.$set(this.operatorsList, slug, data.items);
      }).catch((e) => {
        console.log(e);
      });
    },
  },
};
</script>
