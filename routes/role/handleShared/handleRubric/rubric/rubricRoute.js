/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express,
  verifyEvaluateHasUser,
  listRubricHasQuestionHasEvaluate,
  listRubric,
  createRubric,
  updateRubric,
  deleteRubric,
  validateSpecializationHasUserID,
  validateEvaluateID,
  validateArrayRubricID,
  validateRubricID,
  validateRubricName,
  validateDescription,
} from './rubricModules.js';

const rubricRoute = express.Router();

rubricRoute.get('/rubricHasQuestionHasEvaluate', validateEvaluateID, validateSpecializationHasUserID, verifyEvaluateHasUser, listRubricHasQuestionHasEvaluate);

rubricRoute.route('/')
  .get(validateEvaluateID, validateSpecializationHasUserID, verifyEvaluateHasUser, listRubric)
  .post(validateRubricName, validateDescription, validateEvaluateID, validateSpecializationHasUserID, verifyEvaluateHasUser, createRubric)
  .put(validateRubricID, validateRubricName, validateDescription, validateSpecializationHasUserID, verifyEvaluateHasUser, updateRubric)
  .delete(validateArrayRubricID, validateSpecializationHasUserID, verifyEvaluateHasUser, deleteRubric);
export default rubricRoute;
