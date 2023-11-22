/* eslint-disable import/extensions */
import express from 'express';
import listAcademic from './listAcademic/listAcademic.js';
import listSemester from '../../handleShared/semester/listSemester/listSemester.js';
import listEvaluation from './listEvaluation/listEvaluation.js';
import createEvaluateHasUser from './createEvaluateHasUser/createEvaluateHasUser.js';
import updateEvaluateHasUser from './updateEvaluateHasUser/updateEvaluateHasUser.js';
import updateEvaluationStatus from './updateEvaluationStatus/updateEvaluationStatus.js';
import validateSpecializationHasUserID from '../../../../validations/handleSpecialization/specializationHasUser/validateSpecializationHasUserID/validateSpecializationHasUserID.js';
import validateSemesterID from '../../../../validations/handleSpecialization/semester/validateSemesterID/validateSemesterID.js';
import validateAcademic_roleHasUserID from '../../../../validations/handleSpecialization/evaluationHasUser/validateAcademic_roleHasUserID/validateAcademic_roleHasUserID.js';
import validateEvaluateHasUserID from '../../../../validations/handleSpecialization/evaluationHasUser/validateEvaluateHasUserID/validateEvaluateHasUserID.js';
import validateEvaluationStatusID from '../../../../validations/handleSpecialization/evaluationHasUser/validateEvaluationStatusID/validateEvaluationStatusID.js';

export {
  express,
  listAcademic,
  listSemester,
  listEvaluation,
  createEvaluateHasUser,
  updateEvaluateHasUser,
  updateEvaluationStatus,
  validateSpecializationHasUserID,
  validateSemesterID,
  validateAcademic_roleHasUserID,
  validateEvaluateHasUserID,
  validateEvaluationStatusID,
};
