'use strict';

(function () {

  const getRandomBlue = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomColor = function () {
    return `rgb(0, 0, ${window.util.getRandomBlue(90, 255)})`;
  };

  const getMaxElement = function (arr) {
    let maxElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  const getRandomItem = function (myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
  };

  window.util = {
    getRandomBlue,
    getRandomColor,
    getMaxElement,
    getRandomItem
  };
})();
