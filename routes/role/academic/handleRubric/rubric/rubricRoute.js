/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express,
  verifyEvaluateHasUser,
  listEvaluationRubric,
  listRubric,
  listStatus,
  createRubric,
  updateRubric,
  updateStatusID,
  deleteRubric,
  validateSpecializationHasSemesterID,
  validateEvaluateID,
  validateArrayRubricID,
  validateRubricID,
  validateRubricName,
  validateDescription,
  validateComment,
  validateStatusID,
} from './rubricModules.js';

const rubricRoute = express.Router();

rubricRoute.get('/evaluationRubric', validateEvaluateID, validateSpecializationHasSemesterID, verifyEvaluateHasUser, listEvaluationRubric);

rubricRoute.route('/status')
  .get(listStatus)
  .put(validateStatusID, validateRubricID, validateSpecializationHasSemesterID, verifyEvaluateHasUser, updateStatusID);

rubricRoute.route('/')
  .get(validateEvaluateID, validateSpecializationHasSemesterID, verifyEvaluateHasUser, listRubric)
  .post(validateRubricName, validateDescription, validateEvaluateID, validateComment, validateSpecializationHasSemesterID, verifyEvaluateHasUser, createRubric)
  .put(validateRubricID, validateRubricName, validateDescription, validateComment, validateSpecializationHasSemesterID, verifyEvaluateHasUser, updateRubric)
  .delete(validateArrayRubricID, validateSpecializationHasSemesterID, verifyEvaluateHasUser, deleteRubric);
export default rubricRoute;
