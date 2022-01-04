import { categoryObject as category } from "./category.api";

const qualities = {
  tedious: {
    _id: "67rdca3eeb7f6fgeed471198",
    name: "Нудила",
    color: "primary",
  },
  strange: {
    _id: "67rdca3eeb7f6fgeed471100",
    name: "Странный",
    color: "secondary",
  },
  buller: { _id: "67rdca3eeb7f6fgeed4711012", name: "Троль", color: "success" },
  alcoholic: {
    _id: "67rdca3eeb7f6fgeed471101",
    name: "Алкоголик",
    color: "danger",
  },
  handsome: {
    _id: "67rdca3eeb7f6fgeed471102",
    name: "Красавчик",
    color: "info",
  },
  uncertain: {
    _id: "67rdca3eeb7f6fgeed471103",
    name: "Неуверенный",
    color: "dark",
  },
};

const users = [
  {
    _id: "000001",
    name: "W7",
    category: category.shadow,
    qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
    description: "Палетка теней для век Naughty Nine",
    price: 4890,
    bookmark: false,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/WCONN3HDNEX.jpg",
    alt: "тени W7",
  },
  {
    _id: "000002",
    name: "Под звуки поцелуев",
    category: category.shadow,
    qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
    description: "Палетка для макияжа «Под звуки поцелуев» от Ольги Бузовой",
    price: 1699,
    bookmark: false,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/LT0234300GT.jpg",
    alt: "тени Под звуки поцелуев",
  },
  {
    _id: "000003",
    name: "ARTDECO",
    category: category.shadow,
    qualities: [qualities.buller],
    description: "Перламутровые тени для век Eyeshadow Pearl",
    price: 330,
    bookmark: false,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/DEC030170GT.jpg",
    alt: "тени ARTDECO",
  },
  {
    _id: "000004",
    name: "GIVENCHY",
    category: category.pomade,
    qualities: [qualities.uncertain],
    description:
      "Легкая увлажняющая губная помада с мягким матовым финишем Le Rouge Sheer Velvet",
    price: 3193,
    bookmark: false,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/GIV983314GT.jpg",
    alt: "помада GIVENCHY",
  },
  {
    _id: "000005",
    name: "TSUBAKI PREMIUM",
    category: category.shampoo,
    qualities: [qualities.strange, qualities.tedious],
    description: "Восстанавливающий шампунь для волос",
    price: 324,
    bookmark: false,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/SHI16821TGT.jpg",
    alt: "шампунь TSUBAKI",
  },
  {
    _id: "000006",
    name: "DREAM NATURE",
    category: category.shampoo,
    qualities: [qualities.strange, qualities.uncertain],
    description: "Шампунь 2/1 c Маслом Арганы и Миндаля с дозатором",
    price: 164,
    bookmark: false,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/MPL012001GT.jpg",
    alt: "шампунь DREAM NATURE",
  },
  {
    _id: "000007",
    name: "SEACARE",
    category: category.cream,
    qualities: [qualities.strange, qualities.tedious],
    description:
      "Антивозрастной подтягивающий и повышающий упругость крем с Реноваж, Золотом и Витамином Е",
    price: 1428,
    bookmark: false,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/MPL007866_mainGT.jpg",
    alt: "крем SEACARE",
  },
  {
    _id: "000008",
    name: "CLINIQUE",
    category: category.cream,
    qualities: [qualities.handsome],
    description:
      "Интенсивно увлажняющий липидовосстанавливающий крем на 72 часа для 1-2 типов кожи",
    price: 900,
    bookmark: false,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/CLQ042793GT.jpg",
    alt: "крем CLINIQUE",
  },
  {
    _id: "000009",
    name: "SALLY HANSEN",
    category: category.nailPolish,
    qualities: [qualities.strange, qualities.uncertain],
    description: "Быстросохнущий лак для ногтей Insta-Dri Matte",
    price: 213,
    bookmark: false,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/SHN024011_mainGT.jpg",
    alt: "лак для ногтей SALLY HANSEN",
  },
  {
    _id: "000010",
    name: "COLLISTAR",
    category: category.nailPolish,
    qualities: [qualities.handsome, qualities.buller],
    description: "Лак для ногтей Gloss Nail Lacquer",
    price: 493,
    bookmark: false,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/CLSK10512_mainGT.jpg",
    alt: "лак для ногтей COLLISTAR",
  },
  {
    _id: "000011",
    name: "CLINIQUE",
    category: category.mascara,
    qualities: [qualities.uncertain, qualities.strange],
    description: " Универсальная тушь для ресниц High Impact",
    price: 1789,
    bookmark: false,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/CLQ68AO01GT.jpg",
    alt: "тушь CLINIQUE",
  },
  {
    _id: "000012",
    name: "DIOR",
    category: category.mascara,
    qualities: [qualities.handsome],
    description:
      "Подкручивающая тушь для ресниц с эффектом объема Diorshow Iconic Overcurl",
    price: 2944,
    bookmark: false,
    src: "https://www.letu.ru/common/img/uploaded/skuImageFolder/F13800090GT.jpg",
    alt: "тушь DIOR",
  },
];
// export function fetchAll() {
//   return users;
// }

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(users);
    }, 2000);
  });

const getBy = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(users.find((user) => user._id === id));
    }, 1000);
  });

export default {
  fetchAll,
  getBy,
};
