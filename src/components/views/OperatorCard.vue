<template>
  <v-card
      class="operator-card"
      link
      :to="{name: 'ActionPage', params: { slug: operator.slug}}"
  >
    <v-img
        :src="require(`../../assets/images/${operator.img}`)"
        class="white--text align-end"
    >
      <v-card-title>{{operator.slug}}</v-card-title>
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

  }
</style>
