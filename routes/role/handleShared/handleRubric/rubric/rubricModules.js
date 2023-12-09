/* eslint-disable import/extensions */
import express from 'express';
import verifyEvaluateHasUser from './verifyEvaluateHasUser/verifyEvaluateHasUser.js';
import listRubricHasQuestionHasEvaluate from './listRubricHasQuestionHasEvaluate/listRubricHasQuestionHasEvaluate.js';
import createRubric from './createRubric/createRubric.js';
import updateRubric from './updateRubric/updateRubric.js';
import deleteRubric from './deleteRubric/deleteRubric.js';
import validateSpecializationHasUserID from '../../../../../validations/handleSpecialization/specializationHasUser/validateSpecializationHasUserID/validateSpecializationHasUserID.js';
import validateEvaluateID from '../../../../../validations/handleSpecialization/evaluate/validateEvaluateID/validateEvaluateID.js';
import validateArrayRubricID from '../../../../../validations/handleSpecialization/rubric/validateArrayRubricID/validateArrayRubricID.js';
import validateRubricID from '../../../../../validations/handleSpecialization/rubric/validateRubricID/validateRubricID.js';
import validateDescription from '../../../../../validations/handleSpecialization/rubric/validateDescription/validateDescription.js';
import validateRubricName from '../../../../../validations/handleSpecialization/rubric/validateRubricName/validateRubricName.js';

export {
  express,
  verifyEvaluateHasUser,
  listRubricHasQuestionHasEvaluate,
  createRubric,
  updateRubric,
  deleteRubric,
  validateSpecializationHasUserID,
  validateEvaluateID,
  validateArrayRubricID,
  validateRubricID,
  validateRubricName,
  validateDescription,
};
