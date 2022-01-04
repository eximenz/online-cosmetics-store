export const categoryObject = {
  shadow: { _id: "67rdca3eeb7f6fgeed471818", name: "Тени" },
  pomade: { _id: "67rdca3eeb7f6fgeed471820", name: "Помада" },
  shampoo: { _id: "67rdca3eeb7f6fgeed471814", name: "Шампунь" },
  cream: { _id: "67rdca3eeb7f6fgeed471822", name: "Крем" },
  mascara: { _id: "67rdca3eeb7f6fgeed471824", name: "Тушь" },
  nailPolish: { _id: "67rdca3eeb7f6fgeed471829", name: "Лак для ногтей" },
};

export const professions = [
  { _id: "67rdca3eeb7f6fgeed471818", name: "Тени" },
  { _id: "67rdca3eeb7f6fgeed471820", name: "Помада" },
  { _id: "67rdca3eeb7f6fgeed471814", name: "Шампунь" },
  { _id: "67rdca3eeb7f6fgeed471822", name: "Крем" },
  { _id: "67rdca3eeb7f6fgeed471824", name: "Тушь" },
  { _id: "67rdca3eeb7f6fgeed471829", name: "Лак для ногтей" },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(professions);
    }, 2000);
  });

export default {
  fetchAll,
};
