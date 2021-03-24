// eslint-disable-next-line import/prefer-default-export
export const required = (v) => !!v || 'Поле обязатено к заполнению.';
export const minSum = (v, minValue) => +v >= minValue || `Минимальная сумма пополнения ${minValue} руб.`;
export const maxSum = (v, maxValue) => +v <= maxValue || `Максимальная сумма пополнения ${maxValue} руб.`;
export const matchesRegex = (v, regex) => regex.test(v) || 'Не верно введены данные';
