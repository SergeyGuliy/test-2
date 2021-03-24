export default {
  getTabs: () => new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: 'Operators',
          key: 'operators',
          icon: '',
        },
        {
          name: 'Сommunal',
          key: 'сommunal',
          icon: '',
        },
        {
          name: 'Banks',
          key: 'banks',
          icon: '',
        },
        {
          name: 'Games',
          key: 'games',
          icon: '',
        },
      ]);
    }, 1000);
  }),
};
