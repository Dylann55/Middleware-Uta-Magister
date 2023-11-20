/* eslint-disable import/extensions */
import express from 'express';
import listAcademic from './listAcademic/listAcademic.js';
import listEvaluation from './listEvaluation/listEvaluation.js';
import updateEvaluateHasUser from './updateEvaluateHasUser/updateEvaluateHasUser.js';
import validateEvaluateID from '../../../../validations/storage/evaluate/validateEvaluateID/validateEvaluateID.js';

export {
  express,
  listAcademic,
  listEvaluation,
  updateEvaluateHasUser,
  validateEvaluateID,
};
