/* eslint-disable import/extensions */
import {
  express, listEvaluation, listEvaluationStatus, verifySpecializationHasSemester, updateEvaluationStatus, validateEvaluationStatusID, validateSpecializationHasSemesterID,
} from './firstStage.modules.js';

const firstStageRoute = express.Router();

firstStageRoute.get('/evaluationStatus', listEvaluationStatus);

firstStageRoute.route('/')
  .get(listEvaluation)
  .put(validateSpecializationHasSemesterID, validateEvaluationStatusID, verifySpecializationHasSemester, updateEvaluationStatus);
export default firstStageRoute;
