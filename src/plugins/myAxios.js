import mockData from '../assets/js/mocks';

const MOCK_LOAD_SPEED = 1000;
function myGet(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, MOCK_LOAD_SPEED);
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
  getSlug: (slug) => myGet(mockData.infoBySlug[slug]),
  postTransaction: (data) => myPost(data),
};
