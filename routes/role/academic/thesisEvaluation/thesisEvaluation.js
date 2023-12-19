/* eslint-disable import/extensions */
import {
  express, listEvaluation, listEvaluationStatus, verifyThesisEvaluation, updateEvaluationStatus, updateSpecializationHasSemester, updateSpecializationHasUser, validateEvaluationStatusID, validateSpecializationHasSemesterID, validateSemesterID,
} from './thesisEvaluation.modules.js';

const thesisEvaluationRoute = express.Router();

thesisEvaluationRoute.get('/evaluationStatus', listEvaluationStatus);

thesisEvaluationRoute.route('/')
  .get(listEvaluation)
  .put(validateSpecializationHasSemesterID, validateSemesterID, validateEvaluationStatusID, verifyThesisEvaluation, updateEvaluationStatus, updateSpecializationHasSemester, updateSpecializationHasUser);
export default thesisEvaluationRoute;
