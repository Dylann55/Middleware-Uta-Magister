/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, listEvaluationRubric, listEvaluate, listPreliminaryProjectEvaluation, listThesisEvaluation, createEvaluate, updateEvalute, getProjectURL, deleteProjectURL, handleFileUpload, verifyEvaluationStatus, verifySpecializationHasStudent, validateEvaluateID, validateSpecializationHasUserID, validateSpecializationHasSemesterID, validateStageID, validateAcademicID, validateTypeEvaluateID,
} from './evaluate.modules.js';

const evaluateRoute = express.Router();

evaluateRoute.get('/preliminaryProjectEvaluation', validateSpecializationHasUserID, validateSpecializationHasSemesterID, listPreliminaryProjectEvaluation);
evaluateRoute.get('/thesisEvaluation', validateSpecializationHasUserID, validateSpecializationHasSemesterID, listThesisEvaluation);
evaluateRoute.get('/evaluationRubric', validateEvaluateID, validateStageID, validateSpecializationHasUserID, validateSpecializationHasSemesterID, validateAcademicID, verifySpecializationHasStudent, listEvaluationRubric);

evaluateRoute.route('/')
  .get(validateTypeEvaluateID, validateStageID, validateSpecializationHasUserID, validateSpecializationHasSemesterID, verifySpecializationHasStudent, listEvaluate)
  .post(validateTypeEvaluateID, validateStageID, validateSpecializationHasUserID, validateSpecializationHasSemesterID, verifySpecializationHasStudent, verifyEvaluationStatus, handleFileUpload, createEvaluate)
  .put(validateTypeEvaluateID, validateEvaluateID, validateStageID, validateSpecializationHasUserID, validateSpecializationHasSemesterID, verifySpecializationHasStudent, verifyEvaluationStatus, getProjectURL, handleFileUpload, deleteProjectURL, updateEvalute);

export default evaluateRoute;
