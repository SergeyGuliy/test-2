<template>
  <v-dialog
      transition="dialog-top-transition"
      max-width="400"
      persistent
      :value="leaveTimeout"
  >
    <template>
      <v-card>
        <v-toolbar
            :color="modalData.type"
            dark
        >{{modalData.title}}</v-toolbar>
        <v-card-text class="d-flex align-center justify-center py-4">
          <v-progress-circular
              :rotate="-90"
              :size="150"
              :width="15"
              :value="leaveTimeout"
              color="primary"
              class="ma-auto"
          >
            {{ (10 - (leaveTimeout/10)).toFixed() }} seconds
          </v-progress-circular>
        </v-card-text>
        <v-card-actions
            class="justify-end"
            v-if="modalData.btnType.includes('continueWork')">
          <v-btn
              color="primary"
              block
              @click.stop="$emit('continueWork')"
          >
            Продолжить работу
          </v-btn>
        </v-card-actions>
        <v-card-actions
            class="justify-end"
            v-if="modalData.btnType.includes('goHome')">
          <v-btn
              color="primary"
              block
              @click.stop="$emit('goHome')"
          >
            Вернуться на главную
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: 'ActionPageLeaveModal',
  props: {
    leaveTimeout: {
      required: true,
      type: Number,
    },
    modalData: {
      type: Object,
      required: true,
    },
  },
};
</script>
