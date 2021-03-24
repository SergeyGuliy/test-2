import mockData from '../assets/js/mocks';

function myGet(data) {
  return new Promise((resolve) => {
    resolve(data);
  });
}

function myPost(data) {
  return new Promise((resolve, reject) => {
    const random = Boolean(+(Math.random()).toFixed());
    if (random) {
      resolve(data);
    } else {
      reject(new Error('Что то пошло не так :('));
    }
  });
}

export default {
  getTabs: () => myGet(mockData.tabs),
  getTab: (tab) => myGet(mockData.tabsDetailed[tab]),
  postTransaction: (data) => myPost(data),
};
