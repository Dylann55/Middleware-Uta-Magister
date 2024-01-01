/* eslint-disable max-len */
/* eslint-disable import/extensions */
import {
  express, handleFileUpload, listTitle, listBodyAcademic, createBodyAcademic, updateBodyAcademic, deleteBodyAcademic, validateUserID, validateTitleID, validateArrayBodyAcademicID, validateTitleYear, validateInvestigationLine, validateTypeBond, validateBodyAcademicID,
} from './bodyAcademicModules.js';

const bodyAcademicRoute = express.Router();

bodyAcademicRoute.get('/title', listTitle);

bodyAcademicRoute.route('/')
  .get(validateUserID, listBodyAcademic)
  .post(validateUserID, validateTitleID, validateTitleYear, validateInvestigationLine, validateTypeBond, handleFileUpload, createBodyAcademic)
  .put(validateTitleID, validateTitleYear, validateBodyAcademicID, validateInvestigationLine, validateTypeBond, updateBodyAcademic)
  .delete(validateArrayBodyAcademicID, deleteBodyAcademic);

export default bodyAcademicRoute;
