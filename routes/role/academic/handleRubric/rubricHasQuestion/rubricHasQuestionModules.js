/* eslint-disable import/extensions */
import express from 'express';
import createRubricHasQuestion from './createRubricHasQuestion/createRubricHasQuestion.js';
import updateRubricHasQuestion from './updateRubricHasQuestion/updateRubricHasQuestion.js';
import deleleRubricHasQuestion from './deleteRubricHasQuestion/deleteRubricHasQuestion.js';
import validateArrayRubricHasQuestionID from '../../../../../validations/handleSpecialization/rubricHasQuestion/validateArrayRubricHasQuestionID/validateArrayRubricHasQuestionID.js';
import validateRubricID from '../../../../../validations/handleSpecialization/rubric/validateRubricID/validateRubricID.js';
import validateArrayData from '../../../../../validations/handleSpecialization/rubricHasQuestion/validateArrayData/validateArrayData.js';
import validateRubricHasQuestionArray from '../../../../../validations/handleSpecialization/rubricHasQuestion/validateRubricHasQuestionArray/validateRubricHasQuestionArray.js';

export {
  express,
  createRubricHasQuestion,
  updateRubricHasQuestion,
  deleleRubricHasQuestion,
  validateArrayRubricHasQuestionID,
  validateRubricID,
  validateArrayData,
  validateRubricHasQuestionArray,
};
