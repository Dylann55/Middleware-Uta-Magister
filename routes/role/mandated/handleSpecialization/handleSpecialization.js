/* eslint-disable import/extensions */
import {
  express,
  listAcademic,
  listMandated,
  listSemester,
  listEvaluation,
  createEvaluateHasUser,
  updateEvaluateHasUser,
  updateEvaluationStatus,
  validateSpecializationHasSemesterID,
  validateAcademic_UserID,
  validateEvaluateHasUserID,
  validateEvaluationStatusID,
  validateTypeEvaluateID,
} from './handleSpecialization.modules.js';

const handleSpecializationRoute = express.Router();
handleSpecializationRoute.get('/academic', listAcademic);
handleSpecializationRoute.get('/semester', listSemester);
handleSpecializationRoute.get('/mandated', listMandated);

handleSpecializationRoute.route('/')
  .get(validateTypeEvaluateID, listEvaluation)
  .post(validateTypeEvaluateID, validateAcademic_UserID, validateSpecializationHasSemesterID, validateEvaluationStatusID, createEvaluateHasUser, updateEvaluationStatus)
  .put(validateTypeEvaluateID, validateAcademic_UserID, validateEvaluateHasUserID, validateSpecializationHasSemesterID, updateEvaluateHasUser);
export default handleSpecializationRoute;
