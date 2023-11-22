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
  validateSemesterID,
  validateAcademic_roleHasUserID,
  validateEvaluateHasUserID,
  validateEvaluationStatusID,
} from './handleSpecialization.modules.js';

const handleSpecializationRoute = express.Router();

handleSpecializationRoute.get('/academic', listAcademic);
handleSpecializationRoute.get('/semester', listSemester);

handleSpecializationRoute.route('/')
  .get(validateSemesterID, listEvaluation)
  .post(validateAcademic_roleHasUserID, validateSpecializationHasUserID, createEvaluateHasUser)
  .put(validateAcademic_roleHasUserID, validateEvaluateHasUserID, validateSpecializationHasUserID, validateEvaluationStatusID, updateEvaluateHasUser, updateEvaluationStatus);

export default handleSpecializationRoute;
