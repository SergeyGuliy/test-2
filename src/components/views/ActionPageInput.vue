<template>
  <v-col cols="12" md="6">
    <v-form
        lazy-validation
        :ref="formKey"
        v-model="valid"
    >
      <v-text-field
          v-model="inputNumber"
          v-mask="mask"
          :placeholder="mask"
          :rules="allRules"
          outlined
          append-icon="mdi-backspace"
          @click:append="$emit('backspace')"
      />
      <v-btn
          block
          color="primary"
          @click="submit"
      >
        Продолжить
      </v-btn>
    </v-form>
  </v-col>
</template>

<script>
export default {
  name: 'ActionPageInput',
  props: {
    formKey: {
      required: true,
      type: String,
    },
    value: {
      required: true,
      type: String,
    },
    mask: {
      required: true,
      type: String,
    },
    regex: {
      required: true,
      type: RegExp,
    },
    rules: {
      default: () => [],
      type: Array,
    },
  },
  data() {
    return {
      valid: true,
    };
  },
  computed: {
    allRules() {
      return [
        ...this.rules,
        this.regexRule,
      ];
    },
    regexRule() {
      return (v) => this.regex.test(v) || 'Не верно введены данные';
    },
    inputNumber: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  methods: {
    submit() {
      if (this.$refs[this.formKey].validate()) {
        this.$emit('submit');
        this.valid = true;
      }
    },
  },
};
</script>

<style lang='scss'>
  .ActionPageInput {

  }
</style>
