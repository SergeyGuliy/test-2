<template>
  <v-col cols="12">
    <v-row class="keyboard">
      <v-col
          cols="4"
          class="pa-2"
          v-for="(key, index) in KEYS_MAP[type]"
          :key="index"
      >
        <v-btn
            v-if="key"
            block
            large
            @click="$emit('press', key)"
        >
          {{key}}
        </v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { KEYS_MAP } from '../../assets/js/constants';

export default {
  name: 'ActionPageKeyboard',
  props: {
    type: {
      default: 'withSymbols',
      type: String,
    },
  },
  data() {
    return {
      KEYS_MAP,
    };
  },
};
</script>
