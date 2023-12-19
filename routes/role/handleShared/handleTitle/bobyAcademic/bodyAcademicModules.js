/* eslint-disable import/extensions */
import express from 'express';
import { handleFileUpload } from '../../../handleRoutes/handleFileUpload/handleFileUpload.js';
import listTitle from '../userHasTitle/listTitle/listTitle.js';
import listBodyAcademic from './listBodyAcademic/listBodyAcademic.js';
import createUserHasTitle from './createUserHasTitle/createUserHasTitle.js';
import createBodyAcademic from './createBodyAcademic/createBodyAcademic.js';
import updateUserHasTitle from './updateUserHasTitle/updateUserHasTitle.js';
import updateBodyAcademic from './updateBodyAcademic/updateBodyAcademic.js';
import deleteUserHasTitle from './deleteUserHasTitle/deleteUserHasTitle.js';

import validateUserID from '../../../../../validations/user/validateUserID/validateUserID.js';
import validateTitleID from '../../../../../validations/handleTitle/title/validateTitleID/validateTitleID.js';
import validateUserHasTitleID from '../../../../../validations/handleTitle/userHasTitle/validateUserHasTitleID/validateUserHasTitleID.js';
import validateArrayUserHasTitleID from '../../../../../validations/handleTitle/userHasTitle/validateArrayUserHasTitleID/validateArrayUserHasTitleID.js';
import validateTitleYear from '../../../../../validations/handleTitle/userHasTitle/validateTitleYear/validateTitleYear.js';

import validateBodyAcademicID from '../../../../../validations/handleTitle/bodyAcademic/validateBodyAcademicID/validateBodyAcademicID.js';
import validateInvestigationLine from '../../../../../validations/handleTitle/bodyAcademic/validateInvestigationLine/validateInvestigationLine.js';
import validateTypeBond from '../../../../../validations/handleTitle/bodyAcademic/validateTypeBond/validateTypeBond.js';

export {
  express,
  handleFileUpload,
  listTitle,
  listBodyAcademic,
  createUserHasTitle,
  createBodyAcademic,
  updateUserHasTitle,
  updateBodyAcademic,
  deleteUserHasTitle,
  validateUserID,
  validateTitleID,
  validateUserHasTitleID,
  validateArrayUserHasTitleID,
  validateTitleYear,
  validateBodyAcademicID,
  validateInvestigationLine,
  validateTypeBond,
};
