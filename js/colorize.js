'use strict';

(function () {

  const setupFireball = document.querySelector(`.setup-fireball`);
  const setupFireballInput = document.querySelector(`.fireball-color`);
  let coatColor = `rgb(101, 137, 164)`;
  let eyesColor = `black`;

  const fireballColors = [
    `#ee4830`,
    `#30a8ee`,
    `#5ce6c0`,
    `#e848d5`,
    `#e6e848`
  ];

  const setColorStyle = function (elem, array) {
    elem.style.fill = window.util.getRandomItem(array);
  };

  const setWizardData = function (array1, array2, elem) {
    elem.textContent = `${window.util.getRandomItem(array1)} ${window.util.getRandomItem(array2)}`;
  };

  const getRank = function (wizard) {
    let rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  window.wizard.setEyesChangeHandler(function (color) {
    eyesColor = color;
    window.debounce(window.renderWizard.updateWizards());
  });

  window.wizard.setCoatChangeHandler(function (color) {
    coatColor = color;
    window.debounce(window.renderWizard.updateWizards());
  });

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
    fireballColors,
    setColorStyle,
    setRandomColorStyle,
    fireballColorizeOnKeydown,
    fireballColorizeOnClick,
    getRank
  };

})();
