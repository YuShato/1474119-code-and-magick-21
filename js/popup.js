'use strict';

(function () {
  let userDialog = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = userDialog.querySelector(`.setup-close`);
  const setupWizardForm = document.querySelector(`.setup-wizard-form`);
  setupWizardForm.action = `https://javascript.pages.academy/code-and-magick`;

  const onPopupEscPress = function (evt) {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      window.popupModule.closePopup();
    }
  };

  const openPopup = function () {
    userDialog.classList.remove(`hidden`);
    document.addEventListener(`keydown`, window.popupModule.onPopupEscPress);
  };

  const closePopup = function () {
    userDialog.classList.add(`hidden`);
    document.removeEventListener(`keydown`, window.popupModule.onPopupEscPress);
  };

  const setupOpenOnKeydown = function () {
    setupOpen.addEventListener(`keydown`, function (evt) {
      if (evt.key === `Enter`) {
        window.popupModule.openPopup();
      }
    });
  };

  const setupOpenOnClick = function () {
    setupOpen.addEventListener(`click`, function () {
      window.popupModule.openPopup();
    });
  };

  const setupCloseOnKeydown = function () {
    setupClose.addEventListener(`keydown`, function (evt) {
      if (evt.key === `Enter`) {
        window.popupModule.closePopup();
      }
    });
  };

  const setupCloseOnClick = function () {
    setupClose.addEventListener(`click`, function () {
      window.popupModule.closePopup();
    });
  };

  window.popupModule = {
    onPopupEscPress,
    openPopup,
    closePopup,
    setupOpenOnKeydown,
    setupOpenOnClick,
    setupCloseOnKeydown,
    setupCloseOnClick
  };

})();
