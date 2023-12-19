/* eslint-disable import/extensions */
import {
  express, listEvaluation, listEvaluationStatus, verifyThesisEvaluation, updateEvaluationStatus, updateSpecializationHasSemester, updateSpecializationHasUser, validateEvaluationStatusID, validateSpecializationHasSemesterID,
} from './thesisEvaluation.modules.js';

const thesisEvaluationRoute = express.Router();

thesisEvaluationRoute.get('/evaluationStatus', listEvaluationStatus);

thesisEvaluationRoute.route('/')
  .get(listEvaluation)
  .put(validateSpecializationHasSemesterID, validateEvaluationStatusID, verifyThesisEvaluation, updateEvaluationStatus, updateSpecializationHasSemester, updateSpecializationHasUser);
export default thesisEvaluationRoute;
