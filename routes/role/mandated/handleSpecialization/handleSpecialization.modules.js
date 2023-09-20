/* eslint-disable import/extensions */
import express from 'express';
import listAcademic from './listAcademic/listAcademic.js';
import listEvaluation from './listEvaluation/listEvaluation.js';
import updateEvaluateHasUser from './updateEvaluateHasUser/updateEvaluateHasUser.js';
import validateEvaluateID from '../../../../validations/storage/evaluate/validateEvaluateID/validateEvaluateID.js';
import validateRoleHasUserFirstID from '../../../../validations/handleSpecialization/evaluateHasUser/validateRoleHasUserFirstID/validateRoleHasUserFirstID.js';
import validateRoleHasUserSecondID from '../../../../validations/handleSpecialization/evaluateHasUser/validateRoleHasUserSecondID/validateRoleHasUserSecondID.js';

export {
  express,
  listAcademic,
  listEvaluation,
  updateEvaluateHasUser,
  validateEvaluateID,
  validateRoleHasUserFirstID,
  validateRoleHasUserSecondID,
};
