<template>
  <v-card
      class="operator-card"
      link
      :to="{name: 'ActionPage', params: { slug: operator.slug}}"
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
export default {
  name: 'OperatorCard',
  components: {},
  props: {
    operator: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
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
