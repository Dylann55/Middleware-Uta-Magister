/* eslint-disable import/extensions */
import {
  express,
  listSpecialization,
  listSemester,
  listSpecializationHasUser,
  createSpecializationHasUser,
  updateSpecializationHasUser,
  deleteSpecializationHasUser,
  verifyStatus,
  validateArraySpecializationHasUserID,
  validateSpecializationHasUserID,
  validateSemesterID,
  validateSpecializationID,
} from './specializationHasUser.modules.js';

const specializationHasUserRoute = express.Router();
specializationHasUserRoute.get('/specialization', listSpecialization);
specializationHasUserRoute.put('/semester', listSemester);

specializationHasUserRoute.route('/')
  .get(listSpecializationHasUser)
  .post(validateSpecializationID, validateSemesterID, verifyStatus, createSpecializationHasUser)
  .put(validateSpecializationHasUserID, validateSpecializationID, validateSemesterID, verifyStatus, updateSpecializationHasUser)
  .delete(validateArraySpecializationHasUserID, verifyStatus, deleteSpecializationHasUser);
export default specializationHasUserRoute;
