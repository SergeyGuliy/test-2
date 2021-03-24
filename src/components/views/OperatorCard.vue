<template>
  <v-card
      class="operator-card"
      link
      @click.prevent="goTo(operator.slug)"
  >
    <v-img
        contain
        :src="require(`../../assets/images/${operator.img}`)"
        class="white--text align-end"
    >
    </v-img>
  </v-card>
</template>

<script>
import { ActionPage } from '../../assets/js/routerNames';

export default {
  name: 'OperatorCard',
  props: {
    operator: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goTo(slug) {
      this.$router.push({ name: ActionPage, params: { slug } });
    },
  },
};
</script>

<style lang='scss'>
  .operator-card {
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

  }
</style>
