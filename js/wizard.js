'use strict';

(function () {
  const COAT_COLORS = [
    `rgb(146, 100, 161)`,
    `rgb(215, 210, 55)`,
    `rgb(241, 43, 107)`,
    `rgb(101, 137, 164)`,
    `rgb(0, 0, 0)`,
    `rgb(215, 210, 55)`,
    `rgb(56, 159, 117)`,
    `rgb(241, 43, 107)`
  ];

  const EYES_COLORS = [
    `red`,
    `orange`,
    `yellow`,
    `green`,
    `lightblue`,
    `blue`,
    `purple`
  ];

  let wizard = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
  };

  const wizardElement = document.querySelector(`.setup-wizard`);
  const coatColorInput = document.querySelector(`.coat-color`);
  const eyesColorInput = document.querySelector(`.eyes-color`);
  const wizardCoatElement = wizardElement.querySelector(`.wizard-coat`);
  const wizardEyesElement = wizardElement.querySelector(`.wizard-eyes`);

  const changeColorElem = function (array, elem, input) {
    const newColor = window.util.getRandomItem(array);
    elem.style.fill = newColor;
    input.value = newColor;
    return newColor;
  };

  wizardCoatElement.addEventListener(`click`, function () {
    let currentColor = changeColorElem(COAT_COLORS, wizardCoatElement, coatColorInput);
    wizard.onCoatChange(currentColor);
  });

  wizardEyesElement.addEventListener(`click`, function () {
    let currentColor = changeColorElem(EYES_COLORS, wizardEyesElement, eyesColorInput);
    wizard.onEyesChange(currentColor);
  });

  const setCoatChangeHandler = function (cb) {
    wizard.onCoatChange = cb;
  };

  const setEyesChangeHandler = function (cb) {
    wizard.onEyesChange = cb;
  };

  window.wizard = {
    setCoatChangeHandler,
    setEyesChangeHandler
  };
})();
