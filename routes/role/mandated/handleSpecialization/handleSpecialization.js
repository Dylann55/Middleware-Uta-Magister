/* eslint-disable import/extensions */
import {
  express,
  listAcademic,
  listSemester,
  listEvaluation,
  createEvaluateHasUser,
  updateEvaluateHasUser,
  updateEvaluationStatus,
  validateSpecializationHasUserID,
  validateAcademic_roleHasUserID,
  validateEvaluateHasUserID,
  validateEvaluationStatusID,
} from './handleSpecialization.modules.js';

const handleSpecializationRoute = express.Router();

handleSpecializationRoute.get('/academic', listAcademic);
handleSpecializationRoute.get('/semester', listSemester);

handleSpecializationRoute.route('/')
  .get(listEvaluation)
  .post(validateAcademic_roleHasUserID, validateSpecializationHasUserID, validateEvaluationStatusID, updateEvaluationStatus, createEvaluateHasUser)
  .put(validateAcademic_roleHasUserID, validateEvaluateHasUserID, validateSpecializationHasUserID, updateEvaluateHasUser);

export default handleSpecializationRoute;
