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

  const errorHandler = function (errorMessage) {
    const nodeError = document.createElement(`div`);
    nodeError.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    nodeError.style.position = `absolute`;
    nodeError.style.left = 0;
    nodeError.style.right = 0;
    nodeError.style.fontSize = `30px`;

    nodeError.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, nodeError);
  };

  window.backend.load(successHandler, errorHandler);
})();
