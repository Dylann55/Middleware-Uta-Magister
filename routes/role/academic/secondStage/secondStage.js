/* eslint-disable import/extensions */
import {
  express, listEvaluation, listEvaluationStatus, verifySpecializationHasSemester, updateEvaluationStatus, validateEvaluationStatusID, validateSpecializationHasSemesterID,
} from './secondStage.modules.js';

const secondStageRoute = express.Router();

secondStageRoute.get('/evaluationStatus', listEvaluationStatus);

secondStageRoute.route('/')
  .get(listEvaluation)
  .put(validateSpecializationHasSemesterID, validateEvaluationStatusID, verifySpecializationHasSemester, updateEvaluationStatus);
export default secondStageRoute;
