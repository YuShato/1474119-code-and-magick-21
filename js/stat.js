'use strict';
(function () {
  const CLOUD = {
    CLOUD_WIDTH: 420,
    CLOUD_HEIGHT: 270,
    CLOUD_X: 100,
    CLOUD_Y: 10
  };

  const bar = {
    GAP: 10,
    BAR_HEIGHT: 150,
    BAR_WIDTH: 40
  };

  const column = {
    COLUMN_GAP: 50,
    COLUMN_WIDTH: bar.BAR_WIDTH + 50,
    COLUMN_Y_START: 90
  };

  const colors = {
    TEXT_COLOR: `rgb(80, 80, 80)`,
    SHADOW_COLOR: `rgba(0, 0, 0, 0.7)`,
    YOUR_COLOR: `rgba(255, 0, 0, 1)`,
    CLOUD_COLOR: `rgb(255, 255, 255)`
  };

  const text = {
    FONT: `16px PT Mono`,
    TEXT_Y_START: 260,
    LINE_HEIGHT: 20,
    FIRST_LINE: 40,
    TABLE_START: 140
  };

  const renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD.CLOUD_WIDTH, CLOUD.CLOUD_HEIGHT);
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD.CLOUD_X + bar.GAP, CLOUD.CLOUD_Y + bar.GAP, colors.SHADOW_COLOR);
    renderCloud(ctx, CLOUD.CLOUD_X, CLOUD.CLOUD_Y, colors.CLOUD_COLOR);

    ctx.fillStyle = colors.TEXT_COLOR;
    ctx.font = text.FONT;
    ctx.fillText(`Ура, вы победили!`, CLOUD.CLOUD_X + bar.GAP, text.FIRST_LINE);
    ctx.fillText(`Список результатов:`, CLOUD.CLOUD_X + bar.GAP, text.FIRST_LINE + text.LINE_HEIGHT);


    const maxTime = window.util.getMaxElement(times);

    for (let i = 0; i < names.length; i++) {
      const columnHeight = (bar.BAR_HEIGHT * times[i]) / maxTime;
      const POINTS_Y_START = bar.BAR_HEIGHT - columnHeight + column.COLUMN_Y_START - bar.GAP;
      ctx.fillStyle = colors.TEXT_COLOR;
      ctx.fillText(parseInt(times[i], 10), text.TABLE_START + column.COLUMN_WIDTH * i, POINTS_Y_START);
      if (names[i] === `Вы`) {
        ctx.fillStyle = colors.YOUR_COLOR;
      } else {
        ctx.fillStyle = window.util.getRandomColor(90, 255);
      }

      if (columnHeight === bar.BAR_HEIGHT) {
        ctx.fillRect(text.TABLE_START + column.COLUMN_WIDTH * i, column.COLUMN_Y_START, bar.BAR_WIDTH, columnHeight);
      } else {
        ctx.fillRect(text.TABLE_START + column.COLUMN_WIDTH * i, column.COLUMN_Y_START + (bar.BAR_HEIGHT - columnHeight), bar.BAR_WIDTH, columnHeight);
      }
      ctx.fillStyle = colors.TEXT_COLOR;
      ctx.fillText(names[i], text.TABLE_START + column.COLUMN_WIDTH * i, text.TEXT_Y_START);
    }
  };

})();
