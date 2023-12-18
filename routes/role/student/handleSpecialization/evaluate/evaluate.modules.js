/* eslint-disable import/extensions */
import express from 'express';
import { handleFileUpload } from '../../../handleRoutes/handleFileUpload/handleFileUpload.js';
import listEvaluate from './listEvaluate/listEvaluate.js';
import listPreliminaryProjectEvaluation from './listPreliminaryProjectEvaluation/listPreliminaryProjectEvaluation.js';
import listThesisEvaluation from './listThesisEvaluation/listThesisEvaluation.js';
import listEvaluationRubric from './listEvaluationRubric/listEvaluationRubric.js';
import verifySpecializationHasStudent from './verifySpecializationHasStudent/verifySpecializationHasStudent.js';
import verifyEvaluationStatus from '../specializationHasSemester/verifyEvaluationStatus/verifyEvaluationStatus.js';
import createEvaluate from './createEvaluate/createEvaluate.js';
import getProjectURL from './getProjectURL/getProjectURL.js';
import deleteProjectURL from './deleteProjectURL/deleteProjectURL.js';
import updateEvalute from './updateEvaluate/updateEvaluate.js';

import validateEvaluateID from '../../../../../validations/handleSpecialization/evaluate/validateEvaluateID/validateEvaluateID.js';
import validateSpecializationHasUserID from '../../../../../validations/handleSpecialization/specializationHasUser/validateSpecializationHasUserID/validateSpecializationHasUserID.js';
import validateSpecializationHasSemesterID from '../../../../../validations/handleSpecialization/specializationHasSemester/validateSpecializationHasSemesterID/validateSpecializationHasSemesterID.js';
import validateStageID from '../../../../../validations/handleSpecialization/stage/validateStageID/validateStageID.js';
import validateAcademicID from '../../../../../validations/handleSpecialization/evaluationRubric/validateAcademicID/validateAcademicID.js';
import validateTypeEvaluateID from '../../../../../validations/handleSpecialization/typeEvaluate/validateTypeEvaluateID/validateTypeEvaluateID.js';

export {
  express,
  handleFileUpload,
  listEvaluationRubric,
  listEvaluate,
  listPreliminaryProjectEvaluation,
  listThesisEvaluation,
  verifySpecializationHasStudent,
  verifyEvaluationStatus,
  createEvaluate,
  getProjectURL,
  deleteProjectURL,
  updateEvalute,
  validateSpecializationHasUserID,
  validateSpecializationHasSemesterID,
  validateEvaluateID,
  validateStageID,
  validateAcademicID,
  validateTypeEvaluateID,
};
