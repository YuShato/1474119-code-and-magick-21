'use strict';

let setup = document.querySelector(`.setup`);
let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
let similarListElement = document.querySelector(`.setup-similar-list`);
let wizardAmount = 4;
let setupSimilar = document.querySelector(`.setup-similar`);
const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const coatColor = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const eyesColor = [`black`, `red`, `blue`, `yellow`, `green`];


setup.classList.remove(`hidden`);
setupSimilar.classList.remove(`hidden`);

let getRandomItem = function (myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
};

let setColorStyle = function (elem, array) {
  elem.style.fill = getRandomItem(array);
};

let setWizardData = function (array1, array2, elem) {
  elem.textContent = `${getRandomItem(array1)} ${getRandomItem(array2)}`;
};

for (let i = 0; i < wizardAmount; i++) {
  let wizardElement = similarWizardTemplate.cloneNode(true);
  let wizardName = wizardElement.querySelector(`.setup-similar-label`);
  let wizardEyes = wizardElement.querySelector(`.wizard-eyes`);
  let wizardCoat = wizardElement.querySelector(`.wizard-coat`);

  similarListElement.appendChild(wizardElement);
  setWizardData(WIZARD_NAMES, WIZARD_SURNAMES, wizardName);
  setColorStyle(wizardCoat, coatColor);
  setColorStyle(wizardEyes, eyesColor);
}
