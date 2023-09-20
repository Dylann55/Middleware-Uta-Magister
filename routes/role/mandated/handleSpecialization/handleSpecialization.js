/* eslint-disable import/extensions */
import {
  express,
  listAcademic,
  listEvaluation,
  updateEvaluateHasUser,
  validateEvaluateID,
  validateRoleHasUserFirstID,
  validateRoleHasUserSecondID,
} from './handleSpecialization.modules.js';

const handleSpecializationRoute = express.Router();

handleSpecializationRoute.get('/academic', listAcademic);

handleSpecializationRoute.route('/')
  .get(listEvaluation)
  .put(validateEvaluateID, validateRoleHasUserFirstID, validateRoleHasUserSecondID, updateEvaluateHasUser);
export default handleSpecializationRoute;
