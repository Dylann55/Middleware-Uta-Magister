/* eslint-disable import/extensions */
import {
  express,
  listAcademic,
  listEvaluation,
  updateEvaluateHasUser,
  validateEvaluateID,
} from './handleSpecialization.modules.js';

const handleSpecializationRoute = express.Router();

handleSpecializationRoute.get('/academic', listAcademic);

handleSpecializationRoute.route('/')
  .get(listEvaluation)
  .put(validateEvaluateID, updateEvaluateHasUser);
export default handleSpecializationRoute;
