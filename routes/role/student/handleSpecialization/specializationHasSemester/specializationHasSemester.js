/* eslint-disable import/extensions */
import {
  express,
  listTypeEvaluate,
  listSemester,
  listSpecializationHasSemester,
  createSpecializationHasSemester,
  updateSpecializationHasUser,
  updateStatusID,
  verificationApproval,
  verifySpecializationHasUser,
  verifyEvaluateSemester,
  validateSpecializationHasUserID,
  validateSemesterID,
  validateTypeEvaluateID,
  validateSpecializationHasSemesterID,
} from './specializationHasSemester.modules.js';

const specializationHasSemesterRoute = express.Router();
specializationHasSemesterRoute.get('/typeEvaluate', listTypeEvaluate);
specializationHasSemesterRoute.get('/semester', listSemester);

specializationHasSemesterRoute.route('/')
  .get(validateSpecializationHasUserID, listSpecializationHasSemester)
  .post(validateTypeEvaluateID, validateSemesterID, validateSpecializationHasUserID, verifyEvaluateSemester, verifySpecializationHasUser, verificationApproval, createSpecializationHasSemester, updateStatusID)
  .put(validateSpecializationHasUserID, validateSpecializationHasUserID, validateSemesterID, validateSpecializationHasSemesterID, verifyEvaluateSemester, verifySpecializationHasUser, verificationApproval, updateSpecializationHasUser);
export default specializationHasSemesterRoute;
