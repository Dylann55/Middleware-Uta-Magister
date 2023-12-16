/* eslint-disable import/extensions */
import {
  express,
  listSpecialization,
  listSemester,
  listSpecializationHasUser,
  createSpecializationHasUser,
  updateSpecializationHasUser,
  verifyStatus,
  validateSpecializationHasUserID,
  validateSemesterID,
  validateSpecializationID,
} from './specializationHasUser.modules.js';

const specializationHasUserRoute = express.Router();
specializationHasUserRoute.get('/specialization', listSpecialization);
specializationHasUserRoute.get('/semester', listSemester);

specializationHasUserRoute.route('/')
  .get(listSpecializationHasUser)
  .post(validateSemesterID, validateSpecializationID, createSpecializationHasUser)
  .put(validateSpecializationHasUserID, validateSemesterID, validateSpecializationID, verifyStatus, updateSpecializationHasUser);
export default specializationHasUserRoute;
