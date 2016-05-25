'use strict';

const debug = require('debug')('bot:news');
const Promise = require('bluebird');

function news(bot, message) {
  debug('begin %s');
  let article = 'soy una noticia';
  
  return new Promise((resolve, reject) => {
    // get techcrunch.com/feed

    bot.say(article, resolve);
  });
}

module.exports = news;
