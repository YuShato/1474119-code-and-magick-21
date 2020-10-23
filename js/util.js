'use strict';

(function () {
  window.util = {
    getRandomBlue(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    getRandomColor() {
      return `rgb(0, 0, ${window.util.getRandomBlue(90, 255)})`;
    },

    getMaxElement(arr) {
      let maxElement = arr[0];

      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
      return maxElement;
    },

    getRandomItem(myArray) {
      return myArray[Math.floor(Math.random() * myArray.length)];
    }

  };
})();
