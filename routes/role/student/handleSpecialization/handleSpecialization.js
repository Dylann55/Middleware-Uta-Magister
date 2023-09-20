/* eslint-disable import/extensions */
import {
  express,
  handleFileUpload,
  listSpecialization,
  listEvaluation,
  createSpecializationHasUser,
  createEvaluate,
  updateBeforeProyect,
  updateSpecializationHasUser,
  deleteSpecializationHasUser,
  verifyStatus,
  validateEvaluateID,
  validateSpecializationHasUserID,
  validateSpecializationID,
} from './handleSpecialization.modules.js';

const handleSpecializationRoute = express.Router();
handleSpecializationRoute.get('/specialization', listSpecialization);
handleSpecializationRoute.put('/updateFile', validateEvaluateID, verifyStatus, handleFileUpload, updateBeforeProyect);

handleSpecializationRoute.route('/')
  .get(listEvaluation)
  .post(validateSpecializationID, handleFileUpload, createSpecializationHasUser, createEvaluate)
  .put(validateEvaluateID, verifyStatus, validateSpecializationHasUserID, validateSpecializationID, updateSpecializationHasUser)
  .delete(validateEvaluateID, verifyStatus, validateSpecializationHasUserID, deleteSpecializationHasUser);
export default handleSpecializationRoute;
