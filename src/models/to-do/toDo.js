'use strict';

const mongoose = require('mongoose');

const tpDoSchema = mongoose.Schema({
  assignee: { type: String, required: true },
  text: { type: String, required: true },
  complete: { type: Boolean },
  difficulty: String,
});

const tpDoModel = mongoose.model('todo', tpDoSchema);

module.exports = tpDoModel;
