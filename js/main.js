'use strict';

const setupChosenWisard = document.querySelector(`.setup-wizard`);
const setupChosenWisardCoat = setupChosenWisard.querySelector(`.wizard-coat`);
const setupChosenWisardEyes = setupChosenWisard.querySelector(`.wizard-eyes`);
const coatColorInput = document.querySelector(`.coat-color`);
const eyesColorInput = document.querySelector(`.eyes-color`);

window.popupModule.setupOpenOnKeydown();
window.popupModule.setupOpenOnClick();
window.popupModule.setupCloseOnKeydown();
window.popupModule.setupCloseOnClick();

window.validation.checkUserNameInvalid();
window.validation.checkUserNameLenth();

window.colorize.fireballColorizeOnKeydown();
window.colorize.fireballColorizeOnClick();
window.colorize.changeColorValue(setupChosenWisardCoat, window.colorize.coatColor, coatColorInput);
window.colorize.changeColorValue(setupChosenWisardEyes, window.colorize.eyesColor, eyesColorInput);
