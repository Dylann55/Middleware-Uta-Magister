/* eslint-disable import/extensions */
import {
  express, listEvaluation, listEvaluationStatus, verifySpecializationHasUser, updateEvaluationStatus, validateEvaluationStatusID, validateSpecializationHasUserID,
} from './firstStage.modules.js';

const firstStageRoute = express.Router();

firstStageRoute.get('/evaluationStatus', listEvaluationStatus);

firstStageRoute.route('/')
  .get(listEvaluation)
  .put(validateSpecializationHasUserID, validateEvaluationStatusID, verifySpecializationHasUser, updateEvaluationStatus);
export default firstStageRoute;
