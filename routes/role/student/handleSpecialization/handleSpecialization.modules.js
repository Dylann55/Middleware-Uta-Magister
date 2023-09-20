/* eslint-disable import/extensions */
import express from 'express';
import { handleFileUpload } from '../../handleRoutes/handleFileUpload/handleFileUpload.js';
import listSpecialization from './listSpecialization/listSpecialization.js';
import listEvaluation from './listEvaluation/listEvaluation.js';
import createEvaluate from './createEvaluate/createEvaluate.js';
import createSpecializationHasUser from './createSpecializationHasUser/createSpecializationHasUser.js';
import updateBeforeProyect from './updateBeforeProyect/updateBeforeProyect.js';
import updateSpecializationHasUser from './updateSpecializationHasUser/updateSpecializationHasUser.js';
import deleteSpecializationHasUser from './deleteSpecializationHasUser/deleteSpecializationHasUser.js';
import verifyStatus from './verifyStatus/verifyStatus.js';
import validateEvaluateID from '../../../../validations/storage/evaluate/validateEvaluateID/validateEvaluateID.js';
import validateSpecializationID from '../../../../validations/handleSpecialization/specializationHasUser/validatespecializationID/validateSpecializationID.js';
import validateSpecializationHasUserID from '../../../../validations/handleSpecialization/specializationHasUser/validateSpecializationHasUserID/validateSpecializationHasUserID.js';

export {
  express,
  handleFileUpload,
  listSpecialization,
  listEvaluation,
  createEvaluate,
  createSpecializationHasUser,
  updateBeforeProyect,
  updateSpecializationHasUser,
  deleteSpecializationHasUser,
  verifyStatus,
  validateEvaluateID,
  validateSpecializationHasUserID,
  validateSpecializationID,
};
