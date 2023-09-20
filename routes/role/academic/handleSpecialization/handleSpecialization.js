/* eslint-disable import/extensions */
import {
  express,
  listStatus,
  listEvaluation,
  updateEvaluateHasUser,
  validateEvaluateID,
  validateStatus,
} from './handleSpecialization.modules.js';

const handleSpecializationRoute = express.Router();

handleSpecializationRoute.get('/status', listStatus);

handleSpecializationRoute.route('/')
  .get(listEvaluation)
  .put(validateEvaluateID, validateStatus, updateEvaluateHasUser);
export default handleSpecializationRoute;
