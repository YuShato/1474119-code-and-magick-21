'use strict';

(function () {
  let userDialog = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = userDialog.querySelector(`.setup-close`);
  const setupWizardForm = document.querySelector(`.setup-wizard-form`);
  setupWizardForm.action = `https://javascript.pages.academy/code-and-magick`;


  window.popupModule = {
    onPopupEscPress(evt) {
      if (evt.key === `Escape`) {
        evt.preventDefault();
        window.popupModule.closePopup();
      }
    },

    openPopup() {
      userDialog.classList.remove(`hidden`);
      document.addEventListener(`keydown`, window.popupModule.onPopupEscPress);
    },

    closePopup() {
      userDialog.classList.add(`hidden`);
      document.removeEventListener(`keydown`, window.popupModule.onPopupEscPress);
    },

    setupOpenOnKeydown() {
      setupOpen.addEventListener(`keydown`, function (evt) {
        if (evt.key === `Enter`) {
          window.popupModule.openPopup();
        }
      });
    },

    setupOpenOnClick() {
      setupOpen.addEventListener(`click`, function () {
        window.popupModule.openPopup();
      });
    },

    setupCloseOnKeydown() {
      setupClose.addEventListener(`keydown`, function (evt) {
        if (evt.key === `Enter`) {
          window.popupModule.closePopup();
        }
      });
    },

    setupCloseOnClick() {
      setupClose.addEventListener(`click`, function () {
        window.popupModule.closePopup();
      });
    }
  };
})();
