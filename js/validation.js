'use strict';

(function () {
  const userNameInput = document.querySelector(`.setup-user-name`);
  userNameInput.required = true;
  const MIN_NAME_LENGTH = 2;
  const MAX_NAME_LENGTH = 25;

  window.validation = {

    checkUserNameInvalid() {
      userNameInput.addEventListener(`invalid`, function () {
        if (userNameInput.validity.valueMissing) {
          userNameInput.setCustomValidity(`Обязательное поле`);
        } else {
          userNameInput.setCustomValidity(``);
        }
      });
    },

    checkUserNameLenth() {
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
    },


  };
})();
