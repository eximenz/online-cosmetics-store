class CustomSelect {
  #id
  #options
  #currentSelectedOption
  constructor(id, options) {
    this.#id = id;
    this.#options = options;
  }

  get selectedValue() {
    return this.#currentSelectedOption;
  }

    render(container) {
      // добавляю шаблон выпадающего списка
      const dropDownListLayout = document.createElement('div');
      dropDownListLayout.innerHTML = `<button class="select-dropdown__button select-dropdown__button--${this.#id}"> 
      <span class="select-dropdown select-dropdown--${this.#id}">Выберите элемент</span>
      </button>`;
      dropDownListLayout.className = 'select-dropdown';
      dropDownListLayout.classList.add(`select-dropdown--${this.#id}`);
      container.append(dropDownListLayout);

      // добавляю список ul
      const dropdownList = document.createElement('ul');
      dropdownList.classList.add('select-dropdown__list');
      dropdownList.classList.add(`select-dropdown__list--${this.#id}`);
      dropDownListLayout.insertAdjacentElement('beforeend', dropdownList);


      // функция, которя будет создавать li
      const createLiElement = (textLi, dataValue) => {
        const liElement = document.createElement('li');
        liElement.textContent = textLi;
        liElement.dataset.value = dataValue;
        liElement.classList = 'select-dropdown__list-item';
      
        return liElement;
      };

      // добавляю li в HTML
      this.#options.forEach((el) => {
        const liHTML = createLiElement(el.text, el.value);
        dropdownList.insertAdjacentElement('beforeend', liHTML);
      });

      // реализую открытие списка
      const buttonForDropdown = document.querySelector('.select-dropdown__button');
      const ulElement = document.querySelector('.select-dropdown__list');

      buttonForDropdown.addEventListener('click', (event) => {
        ulElement.classList.toggle('active');
      });

      // создаю делегирование для li через ul
      const allLi = document.querySelectorAll('.select-dropdown__list-item');
      const spanTextAfterSelected = document.querySelector('span');
      ulElement.addEventListener('click', (event) => {

        const currentLi = event.target;

          // перемена подсветки при клике на li
          allLi.forEach((li) => {
            li.classList.remove('selected');
          });
          currentLi.classList.add('selected');
          ulElement.classList.toggle('active');

        // присваиваю приватному полю выбранный li и далее по цепочке дохожу до присваивания приватному полю объекта из массива options
        this.#currentSelectedOption = currentLi;
        this.#currentSelectedOption = this.#currentSelectedOption.dataset.value;
        this.#currentSelectedOption = this.#options.find((item) => {
          return item.value === Number(this.#currentSelectedOption);
        });

        // присваиваю полю значение выбранного li
        spanTextAfterSelected.textContent = this.#currentSelectedOption.text;

        // вывожу геттер в консоль
        console.log(this.selectedValue);
      });
  };
};

const options = [
  { value: 1, text: 'JavaScript' },
  { value: 2, text: 'NodeJS' },
  { value: 3, text: 'ReactJS' },
  { value: 4, text: 'HTML' },
  { value: 5, text: 'CSS' }
];

const customSelect = new CustomSelect('123', options);
const mainContainer = document.querySelector('#container'); 
customSelect.render(mainContainer);
