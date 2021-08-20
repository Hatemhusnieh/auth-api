'use strict';

const mongoose = require('mongoose');

const tpDoSchema = mongoose.Schema({
  assignee: { type: String, required: true },
  text: { type: Number, required: true },
  complete: { type: Boolean },
});

const tpDoModel = mongoose.model('todo', tpDoSchema);

module.exports = tpDoModel;
