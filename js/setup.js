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
const wizardAmount = 4;
const fragment = document.createDocumentFragment();

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

for (let i = 0; i < wizardAmount; i++) {
  fragment.appendChild(renderWizard());
}
similarListElement.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);

userDialog.classList.remove(`hidden`);
