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
      slug: 'Megafon',
    },
    mts: {
      img: 'mts.png',
      slug: 'MTS',
    },

    gaz: {
      img: 'gaz.png',
      slug: 'Газ',
    },
    water: {
      img: 'water.jpg',
      slug: 'Водоснабжение',
    },
    electro: {
      img: 'electro.jpg',
      slug: 'Електросеть',
    },
    www: {
      img: 'www.png',
      slug: 'Интернет',
    },

    sber: {
      img: 'sber.jpeg',
      slug: 'Сбербанк',
    },
    dota: {
      img: 'dota.png',
      slug: 'DOTA',
    },
    wot: {
      img: 'wot.png',
      slug: 'World of tanks',
    },
    wow: {
      img: 'wow.png',
      slug: 'World of warcraft 3',
    },
  },
};
