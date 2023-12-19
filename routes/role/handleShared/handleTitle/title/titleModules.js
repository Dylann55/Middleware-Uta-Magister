/* eslint-disable import/extensions */
import express from 'express';
import listType from './listType/listType.js';
import listUniversity from './listUniversity/listUniversity.js';
import listTitle from './listTitle/listTitle.js';
import createTitle from './createTitle/createTitle.js';
import updateTitle from './updateTitle/updateTitle.js';
import deleteTitle from './deleteTitle/deleteTitle.js';
import validateTitleID from '../../../../../validations/handleTitle/title/validateTitleID/validateTitleID.js';
import validateArrayTitleID from '../../../../../validations/handleTitle/title/validateArrayTitleID/validateArrayTitleID.js';
import validateName from '../../../../../validations/handleTitle/title/validateName/validateName.js';
import validateTypeID from '../../../../../validations/handleTitle/title/validateTypeID/validateTypeID.js';
import validateUniversityID from '../../../../../validations/handleTitle/title/validateUniversityID/validateUniversityID.js';
import validateDepartamentTitle from '../../../../../validations/handleTitle/title/validateDepartamentTitle/validateDepartamentTitle.js';

export {
  express,
  listType,
  listUniversity,
  listTitle,
  createTitle,
  updateTitle,
  deleteTitle,
  validateTitleID,
  validateArrayTitleID,
  validateName,
  validateUniversityID,
  validateTypeID,
  validateDepartamentTitle,
};
