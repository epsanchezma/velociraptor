'use strict';

const test = require('ava');
const onboard = require('../lib/onboard');
const sinon = require('sinon');

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
