/* eslint-disable import/extensions */
import express from 'express';
import { handleFileUpload } from '../../../handleRoutes/handleFileUpload/handleFileUpload.js';
import listTitle from '../userHasTitle/listTitle/listTitle.js';
import listBodyAcademic from './listBodyAcademic/listBodyAcademic.js';
import createBodyAcademic from './createBodyAcademic/createBodyAcademic.js';
import updateBodyAcademic from './updateBodyAcademic/updateBodyAcademic.js';
import deleteBodyAcademic from './deleteBodyAcademic/deleteBodyAcademic.js';

import validateUserID from '../../../../../validations/user/validateUserID/validateUserID.js';
import validateTitleID from '../../../../../validations/handleTitle/title/validateTitleID/validateTitleID.js';
import validateTitleYear from '../../../../../validations/handleTitle/userHasTitle/validateTitleYear/validateTitleYear.js';

import validateArrayBodyAcademicID from '../../../../../validations/handleTitle/bodyAcademic/validateArrayBodyAcademicID/validateArrayBodyAcademicID.js';
import validateBodyAcademicID from '../../../../../validations/handleTitle/bodyAcademic/validateBodyAcademicID/validateBodyAcademicID.js';
import validateInvestigationLine from '../../../../../validations/handleTitle/bodyAcademic/validateInvestigationLine/validateInvestigationLine.js';
import validateTypeBond from '../../../../../validations/handleTitle/bodyAcademic/validateTypeBond/validateTypeBond.js';

export {
  express,
  handleFileUpload,
  listTitle,
  listBodyAcademic,
  createBodyAcademic,
  updateBodyAcademic,
  deleteBodyAcademic,
  validateUserID,
  validateTitleID,
  validateArrayBodyAcademicID,
  validateTitleYear,
  validateBodyAcademicID,
  validateInvestigationLine,
  validateTypeBond,
};
