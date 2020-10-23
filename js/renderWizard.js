'use strict';

(function () {
  const fragment = document.createDocumentFragment();
  const similarListElement = document.querySelector(`.setup-similar-list`);

  window.renderWizard = {
    addAllWizards(count) {
      for (let i = 0; i < count; i++) {
        fragment.appendChild(window.colorize.renderWizard());
      }
      similarListElement.appendChild(fragment);
    },

    showSimilarSetup() {
      document.querySelector(`.setup-similar`).classList.remove(`hidden`);
    }

  };
})();
