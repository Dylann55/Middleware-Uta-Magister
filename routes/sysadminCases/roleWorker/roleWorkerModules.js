/* eslint-disable import/extensions */
import express from 'express';
import listAllRoleWorker from './listAllRoleWorker/listAllRoleWorker.js';
import listRoleWorker from './listRoleWorker/listRoleWorker.js';
import listAllRoles from './listAllRoles/listAllRoles.js';
import createRoleWorker from './createRoleWorker/createRoleWorker.js';
import deleteRoleWorker from './deleteRoleWorker/deleteRoleWorker.js';
import deleteAllRoleWorker from './deleteAllRoleWorker/deleteAllRoleWorker.js';
import inviteWorker from './inviteWorker/inviteWorker.js';

import validateEmail from '../../../validations/worker/validateEmail/validateEmail.js';
import validateWorkerID from '../../../validations/worker/validateWorkerID/validateWorkerID.js';
import validateRoleID from '../../../validations/worker/validateRoleID/validateRoleID.js';
import validateUserID from '../../../validations/worker/validateUserID/validateUserID.js';

export {
  express,
  listRoleWorker,
  listAllRoleWorker,
  listAllRoles,
  createRoleWorker,
  deleteRoleWorker,
  deleteAllRoleWorker,
  inviteWorker,
  validateEmail,
  validateWorkerID,
  validateRoleID,
  validateUserID,
};
