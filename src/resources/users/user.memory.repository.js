const { CommonHelper } = require('../../../src/helper/commonHelper');
const User = require('./user.model');
const Task = require('../tasks/task.model');
const fs = require('fs');

async function getAll() {
  let allUsers = await User.find({}).exec();
  // return CommonHelper.getAllItems('users');
  return User.find({});
}

async function getUserById(userId) {
  let user =  await User.findOne({_id: userId}).exec();
  return User.findOne({_id: userId});
}

async function createUser(user) {
  return User.create(user);
}

async function updateUser(user) {
  return User.updateOne({_id: user.id}, user)
}

async function deleteUser(userId) {
  await Task.updateMany({userId: userId}, {userId: null}).exec();
  return User.deleteOne({_id: userId});
}

module.exports = {
  getAll,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
