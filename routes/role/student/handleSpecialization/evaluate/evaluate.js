/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, listEvaluate, createEvaluate, updateEvalute, getBeforeProyect, getSemesterID, deleteBeforeProyect, handleFileUpload, verifyFirstEvaluationStatus, verifySecondEvaluationStatus, verifyFirstEvaluationListStatus, verifySecondEvaluationListStatus, verifySpecializationHasUser, validateEvaluateID, validateSpecializationHasUserID,
} from './evaluate.modules.js';

const evaluateRoute = express.Router();

evaluateRoute.route('/FirstStage')
  .get(validateSpecializationHasUserID, verifySpecializationHasUser, verifyFirstEvaluationListStatus, listEvaluate)
  .post(validateSpecializationHasUserID, verifySpecializationHasUser, verifyFirstEvaluationStatus, getSemesterID, handleFileUpload, createEvaluate)
  .put(validateSpecializationHasUserID, validateEvaluateID, verifySpecializationHasUser, verifyFirstEvaluationStatus, getSemesterID, getBeforeProyect, handleFileUpload, deleteBeforeProyect, updateEvalute);

evaluateRoute.route('/SecondStage')
  .get(validateSpecializationHasUserID, verifySpecializationHasUser, verifySecondEvaluationListStatus, listEvaluate)
  .post(validateSpecializationHasUserID, verifySpecializationHasUser, verifySecondEvaluationStatus, getSemesterID, handleFileUpload, createEvaluate)
  .put(validateSpecializationHasUserID, validateEvaluateID, verifySpecializationHasUser, verifySecondEvaluationStatus, getSemesterID, getBeforeProyect, handleFileUpload, deleteBeforeProyect, updateEvalute);

export default evaluateRoute;
