/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import express from 'express';
import listRolesHasUser from './listRolesHasUser/listRolesHasUser.js';
import listRoleHasUser from './listRoleHasUser/listRoleHasUser.js';
import listAllRole from './listAllRole/listAllRole.js';
import listAcademic from './listAcademic/listAcademic.js';
import listStudent from './listStudent/listStudent.js';
import createRoleHasUser from './createRoleHasUser/createRoleHasUser.js';
import deleteRoleHasUser from './deleteRoleHasUser/deleteRoleHasUser.js';

import validateUserID from '../../../../../validations/user/validateUserID/validateUserID.js';
import validateArrayRoleID from '../../../../../validations/role/validateArrayRoleID/validateArrayRoleID.js';

export {
  express,
  listRoleHasUser,
  listRolesHasUser,
  listAllRole,
  listAcademic,
  listStudent,
  createRoleHasUser,
  deleteRoleHasUser,
  validateUserID,
  validateArrayRoleID,
};
