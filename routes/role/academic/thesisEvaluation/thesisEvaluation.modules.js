/* eslint-disable import/extensions */
import express from 'express';
import listEvaluation from './listEvaluation/listEvaluation.js';
import listEvaluationStatus from '../firstStage/listEvaluationStatus/listEvaluationStatus.js';
import verifyThesisEvaluation from './verifyThesisEvaluation/verifyThesisEvaluation.js';
import updateEvaluationStatus from '../../mandated/handleSpecialization/updateEvaluationStatus/updateEvaluationStatus.js';
import validateSpecializationHasSemesterID from '../../../../validations/handleSpecialization/specializationHasSemester/validateSpecializationHasSemesterID/validateSpecializationHasSemesterID.js';
import validateEvaluationStatusID from '../../../../validations/handleSpecialization/evaluationHasUser/validateEvaluationStatusID/validateEvaluationStatusID.js';

export {
  express,
  listEvaluation,
  listEvaluationStatus,
  verifyThesisEvaluation,
  updateEvaluationStatus,
  validateEvaluationStatusID,
  validateSpecializationHasSemesterID,
};
