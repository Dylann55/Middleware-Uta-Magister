/* eslint-disable import/extensions */
import express from 'express';
import { handleFileUpload } from '../../../handleRoutes/handleFileUpload/handleFileUpload.js';
import listTitle from './listTitle/listTitle.js';
import listUserHasTitle from './listUserHasTitle/listUserHasTitle.js';
import createUserHasTitle from './createUserHasTitle/createUserHasTitle.js';
import updateUserHasTitle from './updateUserHasTitle/updateUserHasTitle.js';
import deleteUserHasTitle from './deleteUserHasTitle/deleteUserHasTitle.js';
import validateUserID from '../../../../../validations/user/validateUserID/validateUserID.js';
import validateTitleID from '../../../../../validations/handleTitle/title/validateTitleID/validateTitleID.js';
import validateUserHasTitleID from '../../../../../validations/handleTitle/userHasTitle/validateUserHasTitleID/validateUserHasTitleID.js';
import validateArrayUserHasTitleID from '../../../../../validations/handleTitle/userHasTitle/validateArrayUserHasTitleID/validateArrayUserHasTitleID.js';
import validateTitleYear from '../../../../../validations/handleTitle/userHasTitle/validateTitleYear/validateTitleYear.js';

export {
  express,
  handleFileUpload,
  listTitle,
  listUserHasTitle,
  createUserHasTitle,
  updateUserHasTitle,
  deleteUserHasTitle,
  validateUserID,
  validateTitleID,
  validateUserHasTitleID,
  validateArrayUserHasTitleID,
  validateTitleYear,
};
