/* eslint-disable import/extensions */
import express from 'express';
import listEvaluation from './listEvaluation/listEvaluation.js';
import listEvaluationStatus from './listEvaluationStatus/listEvaluationStatus.js';
import verifyThesisEvaluation from './verifyThesisEvaluation/verifyThesisEvaluation.js';
import updateEvaluationStatus from './updateEvaluationStatus/updateEvaluationStatus.js';
import updateSpecializationHasUser from './updateSpecializationHasUser/updateSpecializationHasUser.js';
import updateSpecializationHasSemester from './updateSpecializationHasSemester/updateSpecializationHasSemester.js';
import validateSpecializationHasSemesterID from '../../../../validations/handleSpecialization/specializationHasSemester/validateSpecializationHasSemesterID/validateSpecializationHasSemesterID.js';
import validateEvaluationStatusID from '../../../../validations/handleSpecialization/evaluationHasUser/validateEvaluationStatusID/validateEvaluationStatusID.js';

export {
  express,
  listEvaluation,
  listEvaluationStatus,
  verifyThesisEvaluation,
  updateEvaluationStatus,
  updateSpecializationHasSemester,
  updateSpecializationHasUser,
  validateEvaluationStatusID,
  validateSpecializationHasSemesterID,
};
