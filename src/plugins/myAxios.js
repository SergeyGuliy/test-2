import mockData from '../assets/mocks';

function myGet(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export default {
  getTabs: () => myGet(mockData.tabs),
  getTab: (tab) => myGet(mockData.tabsDetailed[tab]),
};
