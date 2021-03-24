<template>
  <v-col cols="12">
    <v-form
        lazy-validation
        :ref="formKey"
        v-model="valid"
    >
      <div class="label">
        {{formKey === 'inputNumber'? 'Введите номер счета' : 'Введите сумму пополнения'}}
      </div>
      <v-text-field
          v-model="inputNumber"
          v-mask="mask"
          :placeholder="mask"
          :rules="rules"
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
