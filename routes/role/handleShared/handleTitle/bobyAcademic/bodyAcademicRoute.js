/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, handleFileUpload, listTitle, listBodyAcademic, createUserHasTitle, createBodyAcademic, updateUserHasTitle, updateBodyAcademic, deleteUserHasTitle, validateUserID, validateTitleID, validateUserHasTitleID, validateArrayUserHasTitleID, validateYearTitle, validateInvestigationLine, validateTypeBond, validateBodyAcademicID,
} from './bodyAcademicModules.js';

const bodyAcademicRoute = express.Router();

bodyAcademicRoute.get('/title', listTitle);

bodyAcademicRoute.route('/')
  .get(validateUserID, listBodyAcademic)
  .post(validateUserID, validateTitleID, validateYearTitle, validateInvestigationLine, validateTypeBond, handleFileUpload, createUserHasTitle, createBodyAcademic)
  .put(validateUserHasTitleID, validateTitleID, validateYearTitle, validateBodyAcademicID, validateInvestigationLine, validateTypeBond, updateUserHasTitle, updateBodyAcademic)
  .delete(validateArrayUserHasTitleID, deleteUserHasTitle);

export default bodyAcademicRoute;
