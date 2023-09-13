/* eslint-disable import/extensions */
import express from 'express';
import listRolesHasUser from './listRolesHasUser/listRolesHasUser.js';
import listRoleHasUser from './listRoleHasUser/listRoleHasUser.js';
import listAllRole from './listAllRole/listAllRole.js';
import createRoleHasUser from './createRoleHasUser/createRoleHasUser.js';
import deleteRoleHasUser from './deleteRoleHasUser/deleteRoleHasUser.js';

import validateUserID from '../../../../validations/user/validateUserID/validateUserID.js';
import validateArrayRoleID from '../../../../validations/role/validateArrayRoleID/validateArrayRoleID.js';

export {
  express,
  listRoleHasUser,
  listRolesHasUser,
  listAllRole,
  createRoleHasUser,
  deleteRoleHasUser,
  validateUserID,
  validateArrayRoleID,
};
