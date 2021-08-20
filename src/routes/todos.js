'use strict';

const express = require('express');
const bearerAuth = require('../middleware/bearer');
const permissions = require('../middleware/acl');
const toDoSchema = require('../models/to-do/toDo');
const Collection = require('../models/data-collection.js');
const model = new Collection(toDoSchema);
const router = express.Router();

router.get('/', handleGetAll);
router.post('/', bearerAuth, permissions('create'), handleCreate);
router.put('/:id', bearerAuth, permissions('update'), handleUpdate);
router.delete('/:id', bearerAuth, permissions('delete'), handleDelete);

async function handleGetAll(req, res) {
  let allRecords = await model.get();
  res.status(200).json(allRecords);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await model.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await model.update(id, obj);
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await model.delete(id);
  res.status(200).json(deletedRecord);
}

module.exports = router;
