/* eslint-disable import/extensions */
import express from 'express';
import listQuestion from './listQuestion/listQuestion.js';
import listDefaultQuestion from './listDefaultQuestion/listDefaultQuestion.js';
import createQuestion from './createQuestion/createQuestion.js';
import updateQuestion from './updateQuestion/updateQuestion.js';
import deleleQuestion from './deleteQuestion/deleteQuestion.js';
import validateArrayQuestionID from '../../../../../validations/handleSpecialization/question/validateArrayQuestionID/validateArrayQuestionID.js';
import validateQuestionID from '../../../../../validations/handleSpecialization/question/validateQuestionID/validateQuestionID.js';
import validateQuestion from '../../../../../validations/handleSpecialization/question/validateQuestion/validateQuestion.js';

export {
  express,
  listDefaultQuestion,
  listQuestion,
  createQuestion,
  updateQuestion,
  deleleQuestion,
  validateArrayQuestionID,
  validateQuestionID,
  validateQuestion,
};
