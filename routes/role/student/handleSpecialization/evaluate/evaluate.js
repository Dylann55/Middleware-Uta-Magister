/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, listEvaluationRubric, listEvaluate, listSpecializationHasStudent, createEvaluate, updateEvalute, getProjectURL, deleteProjectURL, handleFileUpload, verifyEvaluationStatus, verifySpecializationHasStudent, validateEvaluateID, validateSpecializationHasUserID, validateSpecializationHasSemesterID, validateStageID, validateAcademicID,
} from './evaluate.modules.js';

const evaluateRoute = express.Router();

evaluateRoute.get('/specializationHasStudent', validateSpecializationHasUserID, validateSpecializationHasSemesterID, listSpecializationHasStudent);
evaluateRoute.get('/evaluationRubric', validateEvaluateID, validateStageID, validateSpecializationHasUserID, validateSpecializationHasSemesterID, validateAcademicID, verifySpecializationHasStudent, listEvaluationRubric);

evaluateRoute.route('/')
  .get(validateStageID, validateSpecializationHasUserID, validateSpecializationHasSemesterID, verifySpecializationHasStudent, listEvaluate)
  .post(validateStageID, validateSpecializationHasUserID, validateSpecializationHasSemesterID, verifySpecializationHasStudent, verifyEvaluationStatus, handleFileUpload, createEvaluate)
  .put(validateEvaluateID, validateStageID, validateSpecializationHasUserID, validateSpecializationHasSemesterID, verifySpecializationHasStudent, verifyEvaluationStatus, getProjectURL, handleFileUpload, deleteProjectURL, updateEvalute);

export default evaluateRoute;
