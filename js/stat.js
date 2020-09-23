'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT = `16px PT Mono`;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;
const COLUMN_GAP = 50;
const YOUR_COLOR = `rgba(255, 0, 0, 1)`;
const CLOUD_COLOR = `rgb(255, 255, 255)`;
const SHADOW_COLOR = `rgba(0, 0, 0, 0.7)`;
const TEXT_COLOR = `rgb(80, 80, 80)`;
const TEXT_Y_START = 260;
const LINE_HEIGHT = 20;
const FIRST_LINE = 40;
const COLUMN_WIDTH = BAR_WIDTH + COLUMN_GAP;
const TABLE_START = 140;
const COLUMN_Y_START = 90;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

let getRandomBlue = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomColor = function () {
  return `rgb(0, 0, ${getRandomBlue(90, 255)})`;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = FONT;
  ctx.fillText(`Ура, вы победили!`, CLOUD_X + GAP, FIRST_LINE);
  ctx.fillText(`Список результатов:`, CLOUD_X + GAP, FIRST_LINE + LINE_HEIGHT);


  const maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    const columnHeight = (BAR_HEIGHT * times[i]) / maxTime;
    const POINTS_Y_START = BAR_HEIGHT - columnHeight + COLUMN_Y_START - GAP;
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(parseInt(times[i], 10), TABLE_START + COLUMN_WIDTH * i, POINTS_Y_START);
    if (names[i] === `Вы`) {
      ctx.fillStyle = YOUR_COLOR;
    } else {
      ctx.fillStyle = getRandomColor(90, 255);
    }

    if (columnHeight === BAR_HEIGHT) {
      ctx.fillRect(TABLE_START + COLUMN_WIDTH * i, COLUMN_Y_START, BAR_WIDTH, columnHeight);
    } else {
      ctx.fillRect(TABLE_START + COLUMN_WIDTH * i, COLUMN_Y_START + (BAR_HEIGHT - columnHeight), BAR_WIDTH, columnHeight);
    }
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[i], TABLE_START + COLUMN_WIDTH * i, TEXT_Y_START);
  }
};
