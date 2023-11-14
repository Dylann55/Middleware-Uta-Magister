/* eslint-disable import/extensions */
import express from 'express';
import { handleFileUpload } from '../../../handleRoutes/handleFileUpload/handleFileUpload.js';
import listTitle from './listTitle/listTitle.js';
import listRoleHasTitle from './listRoleHasTitle/listRoleHasTitle.js';
import createRoleHasTitle from './createRoleHasTitle/createRoleHasTitle.js';
import updateRoleHasTitle from './updateRoleHasTitle/updateRoleHasTitle.js';
import deleteRoleHasTitle from './deleteRoleHasTitle/deleteRoleHasTitle.js';
import validateUserID from '../../../../../validations/user/validateUserID/validateUserID.js';
import validateTitleID from '../../../../../validations/handleTitle/title/validateTitleID/validateTitleID.js';
import validateRoleHasTitleID from '../../../../../validations/handleTitle/roleHasTitle/validateRoleHasTitleID/validateRoleHasTitleID.js';
import validateArrayRoleHasTitleID from '../../../../../validations/handleTitle/roleHasTitle/validateArrayRoleHasTitleID/validateArrayRoleHasTitleID.js';

export {
  express,
  handleFileUpload,
  listTitle,
  listRoleHasTitle,
  createRoleHasTitle,
  updateRoleHasTitle,
  deleteRoleHasTitle,
  validateUserID,
  validateTitleID,
  validateRoleHasTitleID,
  validateArrayRoleHasTitleID,
};
