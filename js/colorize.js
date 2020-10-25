'use strict';

(function () {

  const setupFireball = document.querySelector(`.setup-fireball`);
  const setupFireballInput = document.querySelector(`.fireball-color`);

  const coatColor = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const eyesColor = [`black`, `red`, `blue`, `yellow`, `green`];
  const fireballColors = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

  const setColorStyle = function (elem, array) {
    elem.style.fill = window.util.getRandomItem(array);
  };

  const setWizardData = function (array1, array2, elem) {
    elem.textContent = `${window.util.getRandomItem(array1)} ${window.util.getRandomItem(array2)}`;
  };

  const changeColorValue = function (elem, array, input) {
    elem.addEventListener(`click`, function () {
      window.colorize.setColorStyle(elem, array);
      input.value = elem.style.fill;
    });
  };

  const setRandomColorStyle = function (elem, array, input) {
    let currentColor = window.util.getRandomItem(array);
    elem.style.backgroundColor = currentColor;
    input.value = currentColor;
  };

  const fireballColorizeOnKeydown = function () {
    setupFireball.addEventListener(`keydown`, function (evt) {
      if (evt.key === `Enter`) {
        window.colorize.setRandomColorStyle(setupFireball, window.colorize.fireballColors, setupFireballInput);
      }
    });
  };

  const fireballColorizeOnClick = function () {
    setupFireball.addEventListener(`click`, function () {
      window.colorize.setRandomColorStyle(setupFireball, window.colorize.fireballColors, setupFireballInput);
    });
  };

  window.colorize = {
    setWizardData,
    coatColor,
    eyesColor,
    fireballColors,
    setColorStyle,
    changeColorValue,
    setRandomColorStyle,
    fireballColorizeOnKeydown,
    fireballColorizeOnClick
  };

})();
