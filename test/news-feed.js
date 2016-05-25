'use strict';

const test = require('ava');
const newsFeed = require('../lib/news-feed');
const nock = require('nock');
const sinon = require('sinon');
const techcrunch = require('./helpers/feed');

// require test helpers
const BotHelper = require('./helpers/bot');
const StorageHelper = require('./helpers/storage');
const MessageHelper = require('./helpers/message');

// setup good invitation test
test.beforeEach(t => {
  // initialize helpers
  let storage = new StorageHelper();
  let bot = new BotHelper({ storage });
  let message = new MessageHelper();

  // export context
  t.context = {
    bot,
    message,
  };
});

//sends a news article link when someone asks
test('it replies with a news article', t => {
  t.plan(1);
  let { bot, message } = t.context;
  let replyMessage = 'soy una noticia';
  nock('http://feeds.feedburner.com/').get('TechCrunch')
    .reply(200, techcrunch);

  return newsFeed(bot, message).then(() => {
    t.true(bot.say.calledWith(replyMessage));
  });
});

//news article must have a title and link to the new
test.todo('it sends news with title and a link');

//gets the most recent news article from a random rss
test.todo('it fetches a news article from a rss');

//picks a random rss to fetch the news article from
test.todo('it picks random rss to fetch news');