/* eslint-disable import/extensions */
import {
  express,
  listAcademic,
  listSemester,
  listEvaluation,
  createEvaluateHasUser,
  updateEvaluateHasUser,
  updateEvaluationStatus,
  validateSpecializationHasSemesterID,
  validateAcademic_UserID,
  validateEvaluateHasUserID,
  validateEvaluationStatusID,
} from './handleSpecialization.modules.js';

const handleSpecializationRoute = express.Router();
handleSpecializationRoute.get('/academic', listAcademic);
handleSpecializationRoute.get('/semester', listSemester);

handleSpecializationRoute.route('/')
  .get(listEvaluation)
  .post(validateAcademic_UserID, validateSpecializationHasSemesterID, validateEvaluationStatusID, createEvaluateHasUser, updateEvaluationStatus)
  .put(validateAcademic_UserID, validateEvaluateHasUserID, validateSpecializationHasSemesterID, updateEvaluateHasUser);
export default handleSpecializationRoute;
