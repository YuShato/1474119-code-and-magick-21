'use strict';
(function () {

  const setupDialogElement = document.querySelector(`.setup`);
  const dialogHandle = setupDialogElement.querySelector(`.upload`);
  const closeButton = setupDialogElement.querySelector(`.setup-close`);

  dialogHandle.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let centerPosition = {
      x: 1356,
      y: 80
    };

    let dragged = false;
    let bodyParams = document.querySelector(`body`).getBoundingClientRect();
    const setupParams = setupDialogElement.getBoundingClientRect();

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      let shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      let setupLeftCoords = setupDialogElement.offsetLeft - shift.x;
      let setupTopCoords = setupDialogElement.offsetTop - shift.y;

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      if (setupTopCoords >= bodyParams.top && setupTopCoords <= bodyParams.bottom - setupParams.height / 3) {
        setupDialogElement.style.top = setupTopCoords + `px`;
      }

      if (setupLeftCoords <= bodyParams.right - setupParams.width / 2 && setupLeftCoords > bodyParams.left) {
        setupDialogElement.style.left = setupLeftCoords + `px`;
      }


      closeButton.addEventListener(`click`, function () {
        setupDialogElement.style.top = centerPosition.y + `px`;
        setupDialogElement.style.left = centerPosition.x + `px`;
      });

    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);

      if (dragged) {
        const onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener(`click`, onClickPreventDefault);
        };
        dialogHandle.addEventListener(`click`, onClickPreventDefault);
      }
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });


})();
