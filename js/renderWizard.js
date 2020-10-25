'use strict';

(function () {
  const similarListElement = document.querySelector(`.setup-similar-list`);
  const userDialog = document.querySelector(`.setup`);
  const form = userDialog.querySelector(`.setup-wizard-form`);
  const MAX_SIMILAR_WIZARD_COUNT = 4;
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content;

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

  const successHandler = function (wizards) {

    const addWizard = function (maxCount) {
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < maxCount; i++) {
        fragment.appendChild(renderWizard(wizards[i]));
      }
      similarListElement.appendChild(fragment);
    };

    if (MAX_SIMILAR_WIZARD_COUNT < wizards.length) {
      addWizard(MAX_SIMILAR_WIZARD_COUNT);
    } else {
      addWizard(wizards.length);
    }

    userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
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
})();
