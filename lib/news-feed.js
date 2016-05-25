'use strict';

const debug = require('debug')('bot:news');

function news(bot, message) {
  debug('begin %s');
  bot.say(message, 'Hola noticias blabla');
}

module.exports = news;
