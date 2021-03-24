export default {
  tabs: [
    {
      name: 'Моб связь',
      key: 'operators',
      icon: 'mdi-cellphone-android',
    },
    {
      name: 'Комуналка',
      key: 'communal',
      icon: 'mdi-home-analytics',
    },
    {
      name: 'Банки',
      key: 'banks',
      icon: 'mdi-bank',
    },
    {
      name: 'Игры',
      key: 'games',
      icon: 'mdi-gamepad-variant',
    },
  ],
  tabsDetailed: {
    operators: {
      name: 'Operators',
      key: 'operators',
      items: [
        {
          img: 'beeline.jpeg',
          slug: 'beeline',
        },
        {
          img: 'megafon.png',
          slug: 'megafon',
        },
        {
          img: 'mts.png',
          slug: 'mts',
        },
      ],
    },
    communal: {
      name: 'Communal',
      key: 'communal',
      items: [
        {
          img: 'gaz.png',
          slug: 'gaz',
        },
        {
          img: 'water.jpg',
          slug: 'water',
        },
        {
          img: 'electro.jpg',
          slug: 'electro',
        },
        {
          img: 'www.png',
          slug: 'www',
        },
      ],
    },
    banks: {
      name: 'Banks',
      key: 'banks',
      items: [
        {
          img: 'sber.jpeg',
          slug: 'sber',
        },
      ],
    },
    games: {
      name: 'Games',
      key: 'games',
      items: [
        {
          img: 'dota.png',
          slug: 'dota',
        },
        {
          img: 'wot.png',
          slug: 'wot',
        },
        {
          img: 'wow.png',
          slug: 'wow',
        },
      ],
    },
  },
  infoBySlug: {
    beeline: {
      img: 'beeline.jpeg',
      name: 'Beeline',
    },
    megafon: {
      img: 'megafon.png',
      name: 'Megafon',
    },
    mts: {
      img: 'mts.png',
      name: 'MTS',
    },

    gaz: {
      img: 'gaz.png',
      name: 'Газ',
    },
    water: {
      img: 'water.jpg',
      name: 'Водоснабжение',
    },
    electro: {
      img: 'electro.jpg',
      name: 'Електросеть',
    },
    www: {
      img: 'www.png',
      name: 'Интернет',
    },

    sber: {
      img: 'sber.jpeg',
      name: 'Сбербанк',
    },
    dota: {
      img: 'dota.png',
      name: 'DOTA',
    },
    wot: {
      img: 'wot.png',
      name: 'World of tanks',
    },
    wow: {
      img: 'wow.png',
      name: 'World of warcraft 3',
    },
  },
};
