'use strict';

(function () {
  const similarListElement = document.querySelector(`.setup-similar-list`);
  const userDialog = document.querySelector(`.setup`);
  const form = userDialog.querySelector(`.setup-wizard-form`);
  const MAX_SIMILAR_WIZARD_COUNT = 4;
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content;
  let wizards = [];

  form.addEventListener(`submit`, function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add(`hidden`);
      createUserMessage(`green`, `Данные отправлены :)`);
    });
    evt.preventDefault();
  });

  const renderWizard = function (wizard) {
    const wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return wizardElement;
  };

  const addWizard = function (array) {
    const fragment = document.createDocumentFragment();

    const takeNumber = wizards.length > MAX_SIMILAR_WIZARD_COUNT ?
      MAX_SIMILAR_WIZARD_COUNT :
      wizards.length;

    similarListElement.innerHTML = ``;

    for (let i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(array[i]));
    }
    similarListElement.appendChild(fragment);
    userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };

  const namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  const updateWizards = function () {
    addWizard(wizards.sort(function (left, right) {
      let rankDiff = window.colorize.getRank(right) - window.colorize.getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  const successHandler = function (data) {
    wizards = data;
    window.debounce(window.renderWizard.updateWizards());
  };

  const createUserMessage = function (color, userMessage) {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: ${color};`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = userMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  const errorHandler = function (errorMessage) {
    createUserMessage(`red`, errorMessage);
  };

  window.backend.load(successHandler, errorHandler);

  window.renderWizard = {
    updateWizards
  };
})();
