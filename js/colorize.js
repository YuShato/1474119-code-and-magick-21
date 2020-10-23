'use strict';

(function () {
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);
  const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const setupFireball = document.querySelector(`.setup-fireball`);
  const setupFireballInput = document.querySelector(`.fireball-color`);

  window.colorize = {

    coatColor: [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`],
    eyesColor: [`black`, `red`, `blue`, `yellow`, `green`],
    fireballColors: [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`],

    setColorStyle(elem, array) {
      elem.style.fill = window.util.getRandomItem(array);
    },

    setWizardData(array1, array2, elem) {
      elem.textContent = `${window.util.getRandomItem(array1)} ${window.util.getRandomItem(array2)}`;
    },

    renderWizard() {
      let wizardElement = similarWizardTemplate.cloneNode(true);
      let wizardName = wizardElement.querySelector(`.setup-similar-label`);
      let wizardEyes = wizardElement.querySelector(`.wizard-eyes`);
      let wizardCoat = wizardElement.querySelector(`.wizard-coat`);
      window.colorize.setWizardData(WIZARD_NAMES, WIZARD_SURNAMES, wizardName);
      window.colorize.setColorStyle(wizardCoat, window.colorize.coatColor);
      window.colorize.setColorStyle(wizardEyes, window.colorize.eyesColor);
      return wizardElement;
    },

    changeColorValue(elem, array, input) {
      elem.addEventListener(`click`, function () {
        window.colorize.setColorStyle(elem, array);
        input.value = elem.style.fill;
      });
    },

    setRandomColorStyle(elem, array, input) {
      let currentColor = window.util.getRandomItem(array);
      elem.style.backgroundColor = currentColor;
      input.value = currentColor;
    },

    fireballColorizeOnKeydown() {
      setupFireball.addEventListener(`keydown`, function (evt) {
        if (evt.key === `Enter`) {
          window.colorize.setRandomColorStyle(setupFireball, window.colorize.fireballColors, setupFireballInput);
        }
      });
    },

    fireballColorizeOnClick() {
      setupFireball.addEventListener(`click`, function () {
        window.colorize.setRandomColorStyle(setupFireball, window.colorize.fireballColors, setupFireballInput);
      });

    }

  };

})();
