'use strict';

(function () {
  const URL = `https://21.javascript.pages.academy/code-and-magick`;
  const URL_DATA = `https://21.javascript.pages.academy/code-and-magick/data`;

  const createXhr = function (onLoad, method, adress, data) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    xhr.addEventListener(`load`, function () {
      onLoad(xhr.response);
    });
    xhr.open(method, adress);
    xhr.send(data);

  };

  const save = function (data, onLoad) {
    createXhr(onLoad, `POST`, URL, data);
  };

  const load = function (onLoad) {
    createXhr(onLoad, `GET`, URL_DATA, ``);
  };

  window.backend = {
    load,
    save
  };


})();
