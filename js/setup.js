'use strict';

let userDialog = document.querySelector(`.setup`);
const similarListElement = userDialog.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);
const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const coatColor = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const eyesColor = [`black`, `red`, `blue`, `yellow`, `green`];
const fireballColors = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const setupFireball = userDialog.querySelector(`.setup-fireball`);
const setupFireballInput = userDialog.querySelector(`.fireball-color`);
const wizardAmount = 4;
const fragment = document.createDocumentFragment();
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;
const setupChosenWisard = userDialog.querySelector(`.setup-wizard`);
const setupChosenWisardCoat = setupChosenWisard.querySelector(`.wizard-coat`);
const setupChosenWisardEyes = setupChosenWisard.querySelector(`.wizard-eyes`);
const userNameInput = userDialog.querySelector(`.setup-user-name`);
const setupOpen = document.querySelector(`.setup-open`);

const setupClose = userDialog.querySelector(`.setup-close`);
const coatColorInput = userDialog.querySelector(`.coat-color`);
const eyesColorInput = userDialog.querySelector(`.eyes-color`);


const getRandomItem = function (myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
};

const setColorStyle = function (elem, array) {
  elem.style.fill = getRandomItem(array);
};

const setWizardData = function (array1, array2, elem) {
  elem.textContent = `${getRandomItem(array1)} ${getRandomItem(array2)}`;
};

let renderWizard = () => {
  let wizardElement = similarWizardTemplate.cloneNode(true);
  let wizardName = wizardElement.querySelector(`.setup-similar-label`);
  let wizardEyes = wizardElement.querySelector(`.wizard-eyes`);
  let wizardCoat = wizardElement.querySelector(`.wizard-coat`);
  setWizardData(WIZARD_NAMES, WIZARD_SURNAMES, wizardName);
  setColorStyle(wizardCoat, coatColor);
  setColorStyle(wizardEyes, eyesColor);
  return wizardElement;
};

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  userDialog.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  userDialog.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
};

let addAllWizards = function (count) {
  for (let i = 0; i < count; i++) {
    fragment.appendChild(renderWizard());
  }
  similarListElement.appendChild(fragment);
};


const changeColorValue = function (elem, array, input) {
  elem.addEventListener(`click`, function () {
    setColorStyle(elem, array);
    input.value = elem.style.fill;
  });
};

const setRandomColorStyle = function (elem, array, input) {
  elem.style.backgroundColor = getRandomItem(array);
  input.value = elem.style.backgroundColor;
};

addAllWizards(wizardAmount);
userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

userNameInput.addEventListener(`invalid`, function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity(`Обязательное поле`);
  } else {
    userNameInput.setCustomValidity(``);
  }
});

userNameInput.addEventListener(`input`, function () {
  const valueLength = userNameInput.value.length;
  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Ещё ` + (MIN_NAME_LENGTH - valueLength) + ` симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + ` симв.`);
  } else {
    userNameInput.setCustomValidity(``);
  }
});

setupFireball.addEventListener(`click`, function () {
  setRandomColorStyle(setupFireball, fireballColors, setupFireballInput);
});

setupFireball.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    setRandomColorStyle(setupFireball, fireballColors, setupFireballInput);
  }
});

changeColorValue(setupChosenWisardCoat, coatColor, coatColorInput);
changeColorValue(setupChosenWisardEyes, eyesColor, eyesColorInput);
