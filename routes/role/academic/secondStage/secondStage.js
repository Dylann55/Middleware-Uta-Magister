/* eslint-disable import/extensions */
import {
  express, listEvaluation, listEvaluationStatus, verifySpecializationHasUser, updateEvaluationStatus, validateEvaluationStatusID, validateSpecializationHasUserID,
} from './secondStage.modules.js';

const secondStageRoute = express.Router();

secondStageRoute.get('/evaluationStatus', listEvaluationStatus);

secondStageRoute.route('/')
  .get(listEvaluation)
  .put(validateSpecializationHasUserID, validateEvaluationStatusID, verifySpecializationHasUser, updateEvaluationStatus);
export default secondStageRoute;
