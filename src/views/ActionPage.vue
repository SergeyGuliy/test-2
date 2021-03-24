<template>
  <v-container class="action-page" @click="setUserTimeOut">
    <ActionPageLeaveModal
        :leaveTimeout="leaveTimeout"
        :modalData="modalData"
        @continueWork="continueWork"
        @goHome="goHome"
    />
    <v-row>
      <v-col cols="12" class="pa-0">
        <v-row
            v-if="pageData"
            class="mx-auto my-6 align-center"
        >
          <v-col cols="12" sm="6">
            <v-img
                :src="require(`../assets/images/${pageData.img}`)"
                max-height="200px"
                max-width="200px"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <h1 class="headline">{{pageData.name}}</h1>
            <p class="subtitle-1">Введите номер счета и сумму пополнения.
              Потом в течении часа вам постяпят деньги на счет.
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12" class="pa-0">
            <ActionPageInput
                v-show="isFirstStep"
                formKey="inputNumber"
                v-model="inputNumber"
                :mask="phone.mask"
                :rules="phone.rules"
                @backspace="backspace"
                @submit="submitFirstStep"
            />
            <ActionPageInput
                v-show="!isFirstStep"
                formKey="inputSumm"
                v-model="inputSumm"
                :mask="summ.mask"
                :rules="summ.rules"
                @backspace="backspace"
                @submit="submitSecondStep"
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="6" class="action-page__keyboard">
        <ActionPageKeyboard
            type="withSymbols"
            @press="listenKeyPress"
        />
      </v-col>
    </v-row>
    <v-row>
    </v-row>
  </v-container>
</template>

<script>
import { LEAVE_ACTION_DELAY, LEAVE_ACTION_PAGE_TIMEOUT, LEAVE_ACTION_PAGE_STEP } from '../assets/js/constants';
import myAxios from '../plugins/myAxios';
import {
  minSum, maxSum, required, matchesRegex,
} from '../assets/js/rules';
import { Home } from '../assets/js/routerNames';

export default {
  name: 'ActionPage',
  components: {
    ActionPageKeyboard: () => import('../components/views/ActionPageKeyboard.vue'),
    ActionPageLeaveModal: () => import('../components/views/ActionPageLeaveModal.vue'),
    ActionPageInput: () => import('../components/views/ActionPageInput.vue'),
  },
  data() {
    return {
      timeout: {
        userDoingSomething: null,
        userAcceptThatHeIsHere: null,
      },
      leaveTimeout: 0,
      isFirstStep: true,

      LEAVE_ACTION_DELAY,
      LEAVE_ACTION_PAGE_STEP,
      LEAVE_ACTION_PAGE_TIMEOUT,
      phone: {
        mask: '+(###) ###-###',
        rules: [
          (v) => required(v),
          (v) => matchesRegex(v, /\+\([0-9]{3}\) [0-9]{3}-[0-9]{1,3}/),
        ],
      },
      summ: {
        mask: '####',
        rules: [
          (v) => required(v),
          (v) => minSum(v, 1),
          (v) => maxSum(v, 1000),
          (v) => matchesRegex(v, /[0-9]{1,4}/),
        ],
      },
      inputNumber: '',
      inputSumm: '',

      modalData: {
        canLeavePage: false,
        type: 'error',
        title: 'Вы еще здесь?',
        btnType: ['continueWork'],
      },
    };
  },
  async created() {
    if (!this.pageData) {
      this.pageData = { ...await myAxios.getSlug(this.slug) };
    }
    this.setUserTimeOut();
  },
  beforeDestroy() {
    clearInterval(this.timeout.userAcceptThatHeIsHere);
    clearTimeout(this.timeout.userDoingSomething);
    this.leaveTimeout = 0;
  },
  beforeRouteLeave(to, from, next) {
    if (this.modalData.canLeavePage) {
      next();
    } else {
      next(from);
      this.submitLeavePage();
    }
  },
  watch: {
    inputNumber() {
      this.setUserTimeOut();
    },
    inputSumm() {
      this.setUserTimeOut();
    },
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
    pageData: {
      get() {
        return this.$store.state.tabsCache.operators[this.slug];
      },
      set(val) {
        this.$store.commit('tabsCache/setOperator', { key: this.slug, list: val });
      },
    },
    activeRules: {
      get() {
        return this.isFirstStep ? this.phone : this.summ;
      },
    },
    activeInput: {
      get() {
        return this.isFirstStep ? this.inputNumber : this.inputSumm;
      },
      set(val) {
        if (this.isFirstStep) {
          this.inputNumber = val;
        } else {
          this.inputSumm = val;
        }
      },
    },
  },

  methods: {
    async listenKeyPress(key) {
      if (this.activeInput.length < this.activeRules.mask.length) {
        this.addLetter(key.toString());
      }
    },

    async addLetter(key, maxCallStack = 0) {
      const oldLenght = this.activeInput.length;
      if (this.activeRules.mask[this.activeInput.length] === '#') {
        this.activeInput = this.activeInput.concat(key);
      } else if (this.activeRules.mask[this.activeInput.length] !== key) {
        this.activeInput = this.activeInput.concat(' ');
      } else {
        this.activeInput = this.activeInput.concat(this.activeRules.mask[this.activeInput.length]);
      }
      await this.$nextTick();
      const newLenght = this.activeInput.length;
      if (oldLenght === newLenght && maxCallStack < 3) {
        this.addLetter(key, maxCallStack + 1);
      }
    },

    async backspace() {
      this.activeInput = this.activeInput.substring(0, this.activeInput.length - 1);
    },

    async submitFirstStep() {
      this.isFirstStep = false;
    },

    submitLeavePage() {
      this.$set(this, 'modalData', {
        canLeavePage: true,
        type: 'warning',
        title: 'Вы уверены что хотите покинуть страницу?',
        btnType: ['goHome', 'continueWork'],
      });
      this.setLeaveTimeout();
    },

    submitSecondStep() {
      myAxios.postTransaction({
        phone: this.inputNumber,
        summ: this.inputSumm,
      })
        .then(() => {
          this.$set(this, 'modalData', {
            canLeavePage: true,
            type: 'primary',
            title: 'Успешная транзакиця',
            btnType: ['goHome'],
          });
        })
        .catch((e) => {
          this.$set(this, 'modalData', {
            canLeavePage: true,
            type: 'error',
            title: e,
            btnType: ['goHome'],
          });
        })
        .finally(() => {
          this.setLeaveTimeout();
        });
    },

    setUserTimeOut() {
      this.modalData.canLeavePage = false;
      clearTimeout(this.timeout.userDoingSomething);
      this.timeout.userDoingSomething = setTimeout(() => {
        this.$set(this, 'modalData', {
          canLeavePage: true,
          type: 'error',
          title: 'Вы еще здесь?',
          btnType: ['continueWork'],
        });
        this.setLeaveTimeout();
      }, this.LEAVE_ACTION_DELAY);
    },

    setLeaveTimeout() {
      this.timeout.userAcceptThatHeIsHere = setInterval(() => {
        if (this.leaveTimeout >= 100) {
          this.$router.push({ name: Home });
        } else {
          this.leaveTimeout += this.LEAVE_ACTION_PAGE_TIMEOUT / this.LEAVE_ACTION_PAGE_STEP;
        }
      }, this.LEAVE_ACTION_PAGE_TIMEOUT);
    },
    continueWork() {
      clearInterval(this.timeout.userAcceptThatHeIsHere);
      this.leaveTimeout = 0;
      this.setUserTimeOut();
      this.modalData.canLeavePage = false;
    },
    goHome() {
      clearInterval(this.timeout.userAcceptThatHeIsHere);
      this.leaveTimeout = 0;
      this.$router.push({ name: Home });
    },
  },
};
</script>

<style lang="scss">
  .action-page{
    .action-page__keyboard{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
