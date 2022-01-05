import { categoryObject as category } from "./category.api";

const products = [
  {
    _id: "000001",
    name: "W7",
    category: category.shadow,
    description: "Палетка теней для век Naughty Nine",
    price: 4890,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/LT0107104_mainGT.jpg",
    alt: "тени W7",
  },
  {
    _id: "000002",
    name: "Под звуки поцелуев",
    category: category.shadow,
    description: "Палетка для макияжа «Под звуки поцелуев» от Ольги Бузовой",
    price: 1699,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/LT0234300GT.jpg",
    alt: "тени Под звуки поцелуев",
  },
  {
    _id: "000003",
    name: "ARTDECO",
    category: category.shadow,
    description: "Перламутровые тени для век Eyeshadow Pearl",
    price: 330,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/DEC030170GT.jpg",
    alt: "тени ARTDECO",
  },
  {
    _id: "000004",
    name: "GIVENCHY",
    category: category.pomade,
    description:
      "Легкая увлажняющая губная помада с мягким матовым финишем Le Rouge Sheer Velvet",
    price: 3193,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/GIV983314GT.jpg",
    alt: "помада GIVENCHY",
  },
  {
    _id: "000005",
    name: "TSUBAKI PREMIUM",
    category: category.shampoo,
    description: "Восстанавливающий шампунь для волос",
    price: 324,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/SHI16821TGT.jpg",
    alt: "шампунь TSUBAKI",
  },
  {
    _id: "000006",
    name: "DREAM NATURE",
    category: category.shampoo,
    description: "Шампунь 2/1 c Маслом Арганы и Миндаля с дозатором",
    price: 164,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/MPL012001GT.jpg",
    alt: "шампунь DREAM NATURE",
  },
  {
    _id: "000007",
    name: "SEACARE",
    category: category.cream,
    description:
      "Антивозрастной подтягивающий и повышающий упругость крем с Реноваж, Золотом и Витамином Е",
    price: 1428,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/MPL007866_mainGT.jpg",
    alt: "крем SEACARE",
  },
  {
    _id: "000008",
    name: "CLINIQUE",
    category: category.cream,
    description:
      "Интенсивно увлажняющий липидовосстанавливающий крем на 72 часа для 1-2 типов кожи",
    price: 900,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/CLQ042793GT.jpg",
    alt: "крем CLINIQUE",
  },
  {
    _id: "000009",
    name: "ANNY",
    category: category.nailPolish,
    description: "Быстросохнущий лак для ногтей Insta-Dri Matte",
    price: 213,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/ANYA10065GT.jpg",
    alt: "лак для ногтей Anny",
  },
  {
    _id: "000010",
    name: "COLLISTAR",
    category: category.nailPolish,
    description: "Лак для ногтей Gloss Nail Lacquer",
    price: 493,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/CLSK10512_mainGT.jpg",
    alt: "лак для ногтей COLLISTAR",
  },
  {
    _id: "000011",
    name: "CLINIQUE",
    category: category.mascara,
    description: " Универсальная тушь для ресниц High Impact",
    price: 1789,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/CLQ68AO01GT.jpg",
    alt: "тушь CLINIQUE",
  },
  {
    _id: "000012",
    name: "SHISEIDO ",
    category: category.mascara,
    description:
      "Подкручивающая тушь для ресниц с эффектом объема Diorshow Iconic Overcurl",
    price: 2944,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/SHI0001SHGT.jpg",
    alt: "тушь SHISEIDO ",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(products);
    }, 2000);
  });

const getBy = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(products.find((product) => product._id === id));
    }, 1000);
  });

export default {
  fetchAll,
  getBy,
};
